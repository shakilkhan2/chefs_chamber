import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegThumbsUp } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";

const RecipeDetails = ({ recipe, chef }) => {
  const { picture, name, ingredients, cooking_method, rating } = recipe;
  console.log(chef);

  const [disable, setDisable] = useState(false);

  const handleFavourite = () => {
    toast.success("Recipe is your favorite.");
    setDisable(true);
  };

  return (
    <div className=" w-[80%] mx-auto ml-16">
      <div className="bg-amber-50 border  w-80 h-[700px] border-amber-700 my-6 hover:shadow-2xl relative">
        <div>
          <img className="p-2 h-[200px]" src={picture} alt="" />
        </div>
        <div className="text-center p-2">
          <h1 className="text-xl font-bold text-amber-700">{name}</h1>
          <p className="">
            <strong className="text-amber-700">Ingredients:</strong>{" "}
            {ingredients}
          </p>
        </div>
        <div className="p-4">
          <p className="">
            <strong className="text-amber-700"> Cooking method:</strong>{" "}
            {cooking_method}
          </p>

          <div className="flex items-center absolute bottom-24 left-4">
            <div>
              <Rating
                className="text-amber-400"
                placeholderRating={rating}
                readonly
                emptySymbol={<BsStar />}
                placeholderSymbol={<BsStarFill />}
                fullSymbol={<BsStarFill />}
              >
                {" "}
              </Rating>
            </div>
            <div className="ml-40">
              <h3 className="font-semibold flex items-center ">
                <span className="text-amber-700 mr-4">  </span> {rating}
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full ">
          <div className="p-4 mb-0">
            <Link>
              <button
                onClick={handleFavourite}
                disabled={disable}
                className="bg-amber-700 px-4 py-2 disabled:bg-amber-500 rounded w-full text-white hover:bg-amber-500"
              >
                {disable ? "Already added" : "Add to Favorite"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
