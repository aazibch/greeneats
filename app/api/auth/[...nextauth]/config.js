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

        return user;
      }
    })
  ]
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log('[signIn callback] user', user);

  //     if (user?.status === 400 || user?.status === 401) {
  //       throw new Error(user.error);
  //     }

  //     return true;
  //   }
  // }
};

export default config;
