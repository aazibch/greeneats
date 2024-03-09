import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import AuthProvider from '@/components/authentication/auth-provider';

export const metadata = {
  title: 'GreenEats - For the conscientious eater',
  description: 'Vegan and vegetarian dishes from all over the world.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <MainHeader />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
