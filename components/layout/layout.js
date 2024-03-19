import MainFooter from './main-footer/main-footer';
import MainHeader from './main-header/main-header';

export default function Layout({ children }) {
  return (
    <div className="border h-full flex flex-col">
      <MainHeader />
      <main className="grow">{children}</main>
      <MainFooter />
    </div>
  );
}
