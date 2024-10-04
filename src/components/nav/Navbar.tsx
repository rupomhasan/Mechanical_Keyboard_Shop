import { useState } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { CgLogIn } from "react-icons/cg";
import {
  useCartTotalPrice,
  useCartTotalQuantity,
} from "../../redux/features/cart/cartSlice";
import { TbCurrencyTaka } from "react-icons/tb";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const total = useAppSelector(useCartTotalPrice);
  console.log(user);

  const cartQuantity = useAppSelector(useCartTotalQuantity);

  return (
    <div className="navbar max-w-screen-xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavItem />
          </ul>
        </div>
        <Link to="/">
          <img className="w-16 " src="/src/assets/logo.png" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <NavItem />
        </ul>
      </div>
      <div className="navbar-end ">
        <input
          onClick={toggleTheme}
          type="checkbox"
          className="toggle toggle-sm toggle-info"
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartQuantity}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                <span className="font-serif mx-1">{cartQuantity}</span>Items
              </span>
              <p className="flex items-center">
                Subtotal: <TbCurrencyTaka />
                <span className="text-info">{total}</span>
              </p>
              <div className="card-actions">
                <Link to="/cart">
                  <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700 btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {user ? (
          // profile
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.photoUrl ? (
                  <img alt="User Profile" src={user.photoUrl} />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm text-white bg-[#1e88fe] hover:bg-[#0c71c9]">
              <p className="hidden md:block">Login</p> <CgLogIn />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
