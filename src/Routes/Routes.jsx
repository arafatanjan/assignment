import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Registration from "../Pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails";
import AllProducts from "../Pages/AllProducts";
import AddProducts from "../Pages/AddProducts";
import EditProducts from "../Pages/EditProducts";
import EditProfile from "../Pages/EditProfile";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("https://assignment-server-nine-olive.vercel.app/courses"),
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
          loader: ({ params }) =>
            fetch(`https://assignment-server-nine-olive.vercel.app/products/${params.id}`),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Registration />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        { path: "", element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        ),
         },
         {
          path: "profile/edit/:id",
          element: (
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://assignment-server-nine-olive.vercel.app/user/get/${params.id}`
            ),
        },
         {
          path: "all-products",
          element: (
            <PrivateRoute>
              <AllProducts />
            </PrivateRoute>
          ),
        },
        {
          path: "add-products",
          element: (
            <PrivateRoute>
              <AddProducts />
            </PrivateRoute>
          ),
        }, 
        {
          path: "all-products/edit/:id",
          element: (
            <PrivateRoute>
              <EditProducts />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://assignment-server-nine-olive.vercel.app/courses/${params.id}`),
        },       
        ],
    },
  ]);