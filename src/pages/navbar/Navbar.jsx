import React from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/Login";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  bg-amber-50 py-2">
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
        <span className="mr-12">
          <NavLink
            className={({ isActive }) => (isActive ? "text-amber-500 " : "")}
            to="/login"
          >
            Login
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
