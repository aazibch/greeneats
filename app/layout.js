import './globals.css';
import AuthProvider from '@/components/authentication/auth-provider';
import Layout from '@/components/layout/layout';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'GreenEats - For the conscientious eater',
  description:
    'Vegan and vegetarian dishes from all over the world, tailored to a Pakistani audience.'
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
