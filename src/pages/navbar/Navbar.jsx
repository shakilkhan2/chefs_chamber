import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/Login";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handeLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-between items-center  bg-amber-50 py-2 pr-8">
      <Link className="text-amber-500 text-xl ml-20">
        <span className="text-4xl font-bold text-amber-500">Chefs'</span>{" "}
        Chamber
      </Link>
      <div className="flex items-center">
        <span className="mr-12">
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "text-amber-500 " : "")}
            to="/"
          >
            Home
          </NavLink>
        </span>
        <span className="mr-12">
          <NavLink
            className={({ isActive }) => (isActive ? "text-amber-500 " : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </span>
        {user && (
          <span className="mr-12" title={user.displayName}>
            <img
              className="h-10 w-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </span>
        )}
        <span className="mr-12">
          {user ? (
            <button onClick={handeLogOut}>
              {" "}
              <NavLink>Logout</NavLink>
            </button>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "text-amber-500 " : "")}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
