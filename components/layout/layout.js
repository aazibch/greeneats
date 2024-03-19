import MainFooter from './main-footer/main-footer';
import MainHeader from './main-header/main-header';

export default function Layout({ children }) {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
}
