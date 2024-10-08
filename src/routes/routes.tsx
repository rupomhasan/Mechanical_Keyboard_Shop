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
import AdminRoutes from "../components/layOut/AdminRoutes";
import AdminProfile from "../components/dashBoard/admin/AdminProfile";
import AllProducts from "../components/dashBoard/admin/AllProducts";
import AddProduct from "../components/dashBoard/admin/AddProduct";
import AllReviews from "../components/dashBoard/admin/AllReviews";
import AllBrands from "../components/dashBoard/admin/AllBrands";
import AddBrand from "../components/dashBoard/admin/AddBrand";
import UpdateProduct from "../components/dashBoard/admin/UpdateProduct";
import AllOrder from "../components/dashBoard/admin/AllOrder";
import AboutOrder from "../components/dashBoard/admin/AboutOrder";

import AboutUs from "../pages/aboutUs/AboutUs";
import ErrorPage from "../components/error/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/aboutUs",
        element: <AboutUs />,
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
        path: "/orderDetails/:id",
        element: <AboutOrder />,
      },

      {
        path: "/dashBoard",
        element: (
          <AdminRoutes>
            <DashBoard />
          </AdminRoutes>
        ),
        children: [
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "products",
            element: <AllProducts />,
          },
          {
            path: "addProducts",
            element: <AddProduct />,
          },
          {
            path: "updateProduct/:id",
            element: <UpdateProduct />,
          },

          {
            path: "orders",
            element: <AllOrder />,
          },
          {
            path: "aboutOrder/:id",
            element: <AboutOrder />,
          },
          {
            path: "brands",
            element: <AllBrands />,
          },
          {
            path: "addBrand",
            element: <AddBrand />,
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
