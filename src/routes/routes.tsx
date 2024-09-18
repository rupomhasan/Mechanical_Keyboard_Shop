import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Products from "../pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
      },
      {
        path: "/contact",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp></SignUp>,
  },
]);

export default router;
