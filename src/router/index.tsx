import { SITE_MAP } from '@constants/siteMap';
import PublicLayout from '@layout/public';
import HomePage from '@pages/Home';
import NotFound from '@pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={SITE_MAP.HOME.path} element={<HomePage />} />
          <Route path={SITE_MAP.NOT_FOUND.path} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
