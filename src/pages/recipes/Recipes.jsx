import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeDetails from "../recipeDetails/RecipeDetails";

const Recipes = () => {
  const { id } = useParams();
  // console.log(id);
  const allRecipes = useLoaderData();
  //   console.log(allRecipes);
  const recipes = allRecipes.filter((recipe) => recipe.chef_id == id);
  // console.log(recipes);
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://y-shakilkhan2.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        let dataFind = data.find((dt) => dt.id == id);
        setChefs(dataFind);
      });
  }, []);

  console.log(chefs);
  return (
    <div>
      <div className="flex w-[70%] mx-auto mt-12 bg-white border border-amber-500 mb-6">
        <div>
          <img className="h-60 p-4 " src={chefs.picture} alt="" />
        </div>
        <div className="p-4 w-[50%]">
          <h1 className="text-2xl font-bold text-amber-700">
            {" "}
            <span className="font-semibold  text-md ">{chefs.name}</span>
          </h1>
          <p>
            <span>
              <strong>Bio:</strong>
            </span>{" "}
            {chefs.bio}
          </p>
          <h1 className="text-lg font-bold text-amber-700 mt-2">
            Likes:{" "}
            <span className="font-semibold   text-black">
              {chefs.likes_ratings}
            </span>
          </h1>
          <h1 className="text-lg font-bold text-amber-700 ">
            Recipes:{" "}
            <span className="font-semibold   text-black">
              {chefs.num_recipes}
            </span>
          </h1>
          <h1 className="text-lg font-bold text-amber-700 ">
            Experienced for:{" "}
            <span className="font-semibold   text-black">
              {chefs.experience_years} years
            </span>
          </h1>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-amber-700 text-center">
        My recipes
      </h1>

      <div className="grid grid-cols-3  ">
        {recipes.map((recipe) => (
          <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
