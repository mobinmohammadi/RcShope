// در MainLayout.jsx
import { Outlet } from "react-router";
import { Breadcrumbs, Breadcrumb } from "react-aria-components";
import { Link as RouterLink } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="mx-auto font-Dana">
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
