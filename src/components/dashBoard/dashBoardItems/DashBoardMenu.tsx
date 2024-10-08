import { NavLink } from "react-router-dom";

const DashBoardMenu = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashBoard/profile"
          className={({ isActive }) =>
            `${
              isActive ? " bg-blue-500 text-white" : ""
            }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
          }
        >
          Dashboard
      </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard/products"
          className={({ isActive }) =>
            `${
              isActive ? " bg-blue-500 text-white" : ""
            }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard/addProducts"
          className={({ isActive }) =>
            `${
              isActive ? " bg-blue-500 text-white" : ""
            }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
          }
        >
          AddProducts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard/orders"
          className={({ isActive }) =>
            `${
              isActive ? " bg-blue-500 text-white" : ""
            }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
          }
        >
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard/brands"
          className={({ isActive }) =>
            `${
              isActive ? " bg-blue-500 text-white" : ""
            }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
          }
        >
          Brands
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard/addBrand"
          className={({ isActive }) =>
            `${
              isActive ? " bg-blue-500 text-white" : ""
            }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
          }
        >
          Add Brand
        </NavLink>
      </li>
    </>
  );
};

export default DashBoardMenu;
