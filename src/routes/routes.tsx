import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import SignUp from "../pages/register/Register";
import Products from "../pages/products/Products";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Details/ProductDetails";
import Cart from "../pages/cart/Cart";

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
