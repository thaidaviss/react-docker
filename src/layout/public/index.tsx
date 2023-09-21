import Header from '@layout/decorator/Header';
import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PublicLayout;
