import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:5000/chefs`)
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ],
  },
]);

export default router;
