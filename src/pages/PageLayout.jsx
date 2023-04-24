import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import Header from "./LayoutComponents/Header"
import Footer from "./LayoutComponents/Footer";

const PageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
