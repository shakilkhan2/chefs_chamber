import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  bg-amber-50 py-2">
      <Link className="text-amber-500 text-xl ml-20">
        <span className="text-4xl font-bold text-amber-500">Chefs'</span> Chamber
      </Link>
      <div>
        <Link className="mr-12" to="/">
          Home
        </Link>
        <Link className="mr-12" to="/blog">
          Blog
        </Link>
        <Link className="mr-12" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
