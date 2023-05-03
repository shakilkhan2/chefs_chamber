import React from "react";
import {  FaRegThumbsUp } from "react-icons/fa";
import "./chefInfo.css";
import { Link } from "react-router-dom";

const ChefInfo = ({ chef }) => {
  // console.log(chef);
  const {id, picture, name, experience_years, num_recipes, likes_ratings, bio } =
    chef;

  return (
    <div className=" w-[80%] mx-auto ml-16">
        
        <div className="bg-amber-50 border-2 w-80 h-[550px] border-amber-500 my-12 shadow-2xl relative">
  <div>
    <img className="p-4" src={picture} alt="" />
  </div>
  <div className="text-center p-2">
    <h1 className="text-3xl font-bold text-amber-500">{name}</h1>
    <p className="">{bio}</p>
  </div>
  <div className="p-4">
    <h3 className="font-semibold">
      <span className="font-bold text-amber-500">Cooking for:</span>{" "}
      {experience_years}years
    </h3>
    <h3 className="font-semibold">
      <span className="font-bold text-amber-500">Recipes:</span>{" "}
      {num_recipes}
    </h3>
    <h3 className="font-semibold flex items-center ">
      <span className="text-amber-500 mr-4">
        {" "}
        <FaRegThumbsUp />{" "}
      </span>{" "}
      {likes_ratings}
    </h3>
  </div>
  <div className="absolute bottom-0 left-0 w-full">
    <div className="p-4 mb-0">
      <Link to={`/recipes/${id}`}><button className="bg-amber-500 px-4 py-2 rounded w-full text-white hover:bg-amber-600">View Recipes</button></Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default ChefInfo;
