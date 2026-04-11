import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const headerAtBottom = pathname === '/azeitetr';

  return (
    <div className="flex min-h-screen flex-col">
      {!headerAtBottom && <Header />}
      <main className="flex-1">{children}</main>
      {headerAtBottom && <Header />}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
