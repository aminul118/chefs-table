import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

export default function Recipes({ handleCook }) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1>Recipes {recipes.length}</h1>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {recipes.map((recipe, idx) => (
          <Recipe handleCook={handleCook} recipe={recipe} key={idx}></Recipe>
        ))}
      </div>
    </div>
  );
}
