import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeDetails from "../recipeDetails/RecipeDetails";

const Recipes = () => {
  const { id } = useParams();
  console.log(id);

  const allRecipes = useLoaderData();
  //   console.log(allRecipes);

  const recipes = allRecipes.filter((recipe) => recipe.chef_id == id);
  console.log(recipes);

  return (
    <div>
      <h1 className="text-6xl font-bold text-amber-700 text-center">
        All recipes here{allRecipes.length}
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
