import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Loading from "../pages/loading/Loading";
import Recipes from "../pages/recipes/Recipes";
import RecipeDetails from "../pages/recipeDetails/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:5000/chefs`),
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/recipes`),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
