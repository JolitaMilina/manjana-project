import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';

const PageLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default PageLayout;
