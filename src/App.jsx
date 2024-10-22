import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const handleCook = (cook) => {
    const ifExit = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === cook.recipe_id
    );
    if (!ifExit) {
      setRecipeQueue([...recipeQueue, cook]);
    } else {
      alert('Recipe already Exits');
    }
  };
  console.log(recipeQueue)

  return (
    <div className="container mx-auto">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Recepies */}
      <OurRecipes></OurRecipes>
      {/* Recipe card section */}
      <section className="flex justify-between mx-6 mt-16">
        {/* Card Section */}
        <Recipes handleCook={handleCook}></Recipes>

        {/* Sidebar section */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
}
