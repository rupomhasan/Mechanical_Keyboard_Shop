import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const NavItem = () => {
  const user = useAppSelector(useCurrentUser);

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "text-gray-500 underline underline-offset-4" : ""
          }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `${
            isActive ? "text-gray-500 " : ""
          } hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `${
            isActive ? "text-gray-500 " : ""
          }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
        }
      >
        AboutUs
      </NavLink>

      {user?.role === "Admin" && (
        <NavLink
          to="/dashBoard/profile"
          className={({ isActive }) =>
            `${
              isActive ? "text-gray-500 " : ""
            }  hover:text-white hover:bg-[#1e88e5] py-1 px-3 rounded`
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );
};

export default NavItem;
