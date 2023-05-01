import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-20 mt-8">
      <Link className="text-blue-500 text-xl ">
        <span className="text-4xl font-bold text-blue-600">Chefs'</span> Chamber
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
