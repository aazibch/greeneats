import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/models/User';
import dbConnect from '@/lib/dbConnect';

const config = {
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
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

        dbConnect();
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
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.username = user.username;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
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
