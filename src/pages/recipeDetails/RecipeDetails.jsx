import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipeDetails = ({ recipe }) => {
  const { name, ingredients, cooking_method, rating } = recipe;

  return (
    <div className=" w-[80%] mx-auto ml-16">
      <div className="bg-amber-50 border-2 w-80 h-[550px] border-amber-700 my-12 shadow-2xl relative">
        <div className="text-center p-2">
          <h1 className="text-3xl font-bold text-amber-700">{name}</h1>
          <p className="">{ingredients}</p>
        </div>
        <div className="p-4">
          <p className="font-semibold">
            <span className="font-bold text-amber-700">Cooking for:</span>{" "}
            {cooking_method}years
          </p>

          <h3 className="font-semibold flex items-center ">
            <span className="text-amber-700 mr-4">
              {" "}
              <FaRegThumbsUp />{" "}
            </span>{" "}
            {rating}
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="p-4 mb-0">
            <Link>
              <button className="bg-amber-700 px-4 py-2 rounded w-full text-white hover:bg-amber-500">
                Add Favorite
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
