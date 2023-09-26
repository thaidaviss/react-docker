import Footer from '@layout/decorator/Footer';
import Header from '@layout/decorator/Header';
import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default PublicLayout;
