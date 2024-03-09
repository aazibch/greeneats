import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/models/User';
import dbConnect from '@/lib/dbConnect';
import { signupSchema } from '@/lib/schemas';

const config = {
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log('[Credentials Provider][authorize]');

        if (!credentials.email || !credentials.password) {
          throw new Error('Please provide an email address and password.');
        }

        await dbConnect();
        let user = await User.findOne({ email: credentials.email }).select(
          '+password'
        );

        if (
          !user ||
          !(await user.isPasswordCorrect(credentials.password, user.password))
        ) {
          throw new Error('Incorrect email address or password.');
        }

        return user.toObject();
      }
    }),
    CredentialsProvider({
      id: 'credentials-signup',
      name: 'credentials-signup',
      async authorize(credentials, req) {
        console.log('["credentials-signup" Provider][authorize]');
        try {
          const user = {
            fullName: credentials.fullName,
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
            passwordConfirmation: credentials.passwordConfirmation
          };

          const { error, value } = signupSchema.validate(user);

          if (error) {
            throw new Error(error.details[0].message);
          }

          await dbConnect();
          const userDoc = await User.create(user);
          return userDoc;
        } catch (err) {
          if (
            'keyPattern' in err &&
            Object.keys(err.keyPattern)[0] === 'email'
          ) {
            throw new Error(
              'An account with the same email address already exists.'
            );
          } else if (
            'keyPattern' in err &&
            Object.keys(err.keyPattern)[0] === 'username'
          ) {
            throw new Error(
              'An account with the same username already exists.'
            );
          }

          throw err;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.fullName = user.fullName;
        token.username = user.username;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.fullName = token.fullName;
        session.user.username = token.username;
        session.user.email = token.email;

        delete session.user.name;
        delete session.user.image;
      }

      return session;
    }
  }
};

export default config;
