import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/Login";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center  bg-amber-50 py-2 pr-8">
      <Link className="text-amber-500 text-xl ml-20">
        <span className="text-4xl font-bold text-amber-500">Chefs'</span>{" "}
        Chamber
      </Link>
      <div>
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
          <span className="mr-12">
            <NavLink to="/">{user.userName}</NavLink>
          </span>
        )}
        <span className="mr-12">
          {user ? (
            <NavLink>Logout</NavLink>
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
