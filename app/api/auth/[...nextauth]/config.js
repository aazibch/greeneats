import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/models/User';
import dbConnect from '@/lib/dbConnect';

const config = {
  pages: {
    signIn: '/signin'
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
          return null;
        }

        dbConnect();
        let user = await User.findOne({ email: credentials.email }).select(
          '+password'
        );

        if (
          !user ||
          !(await user.isPasswordCorrect(credentials.password, user.password))
        ) {
          return null;
        }

        return user;
      }
    })
  ]
};

export default config;
