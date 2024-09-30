import { Outlet, useLocation } from "react-router-dom";
import Footer from "../home/footer/Footer";
import Navbar from "../nav/Navbar";
import Announcement from "../../utils/Announcement";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className=" font-mono max-w-screen-xl mx-auto ">
      <div className="mx-1">
        {location.pathname === "/" && <Announcement />}
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
