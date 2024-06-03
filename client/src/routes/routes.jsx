import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import AllNews from "../pages/AllNews";
import EditNews from "../pages/EditNews";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import HomePage from "../pages/Home";
import SinglePage from "../component/singlePage/SinglePage";
import AddNews from "../pages/AddNews";
import Culture from "../pages/Culture";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        // loader: () => fetch("http://localhost:5000/shoes"),
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/singlepage/:id",
        element: <SinglePage />,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all",
        element: <Culture />,
      },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "dashboard/home",
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "all-news",
        element: (
          <PrivateRoute>
            <AllNews />
          </PrivateRoute>
        ),
      },
      {
        path: "add-news",
        element: (
          <PrivateRoute>
            <AddNews />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfile />,
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/user/get/${params.id}`),
      },
      {
        path: "all-news/edit/:id",
        element: (
          <PrivateRoute>
            <EditNews />
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/shoes/${params.id}`),
      },
    ],
  },
]);
