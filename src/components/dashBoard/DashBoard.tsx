import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Outlet } from "react-router-dom";
import DashBoardMenu from "./dashBoardItems/DashBoardMenu";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Button to open the drawer */}
      <div className="ml-5">
        <button
          className="btn btn-sm border-blue-500 text-blue-600"
          onClick={() => setIsOpen(true)}
        >
          Menu
        </button>
      </div>

      <Outlet />
      <div
        className={`fixed top-0 left-0 z-40  h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-base-200`}
        aria-labelledby="drawer-navigation-label"
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase ">
          Menu
        </h5>
        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 "
        >
          <MdOutlineCancel className="text-3xl " />
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="menu text-lg space-y-2 font-medium">
            <DashBoardMenu />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
