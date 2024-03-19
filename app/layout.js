import './globals.css';
import AuthProvider from '@/components/authentication/auth-provider';
import Layout from '@/components/layout/layout';

export const metadata = {
  title: 'GreenEats - For the conscientious eater',
  description: 'Vegan and vegetarian dishes from all over the world.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
