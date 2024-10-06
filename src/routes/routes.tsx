import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import SignUp from "../pages/register/Register";
import Products from "../pages/products/Products";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Details/ProductDetails";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkOut/CheckOut";
import ProtectedRoutes from "../components/layOut/ProtectedRoutes";
import DashBoard from "../components/dashBoard/DashBoard";
import Purchase from "../components/dashBoard/purchase/Purchase";
import UserProfile from "../components/dashBoard/userProfile/UserProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },

      {
        path: "/dashBoard",
        element: <DashBoard />,
        children: [
          {
            path: "",
            // element: <UserProfile />,
          },
        ],
      },
      {
        path: "/checkOut",
        element: (
          <ProtectedRoutes>
            <CheckOut />
          </ProtectedRoutes>
        ),
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
