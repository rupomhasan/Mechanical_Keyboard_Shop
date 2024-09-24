import Home from "../../pages/Home/Home";
import Navbar from "../nav/Navbar";

const MainLayout = () => {
  return (
    <div className=" font-mono ">
      <Navbar />
      <Home />
    </div>
  );
};

export default MainLayout;
