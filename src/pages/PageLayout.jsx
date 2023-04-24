import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./Footer/Footer";

const PageLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PageLayout;
