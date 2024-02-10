import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'GreenEats - For the conscientious eater',
  description: 'Vegan and vegetarian dishes from all over the world.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
