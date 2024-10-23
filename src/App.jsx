import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparing, setPreparing] = useState([]);

  const handleCook = (cook) => {
    const ifExit = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === cook.recipe_id
    );
    if (!ifExit) {
      setRecipeQueue([...recipeQueue, cook]);
    } else {
      alert("Recipe already Exits");
    }
  };

  const handlePrepare = (item) => {
    console.log(item)
    // Fine which item remove
    const deleteItem = recipeQueue.find((recipe) => recipe.recipe_id === item);
    //
    const updateItems = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== item
    );
    setRecipeQueue(updateItems);

    setPreparing([...preparing, deleteItem])
  };

  return (
    <div className=" mx-auto container">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Recepies */}
      <OurRecipes></OurRecipes>
      {/* Recipe card section */}
      <section className="flex justify-between mx-3 mt-16">
        {/* Card Section */}
        <Recipes handleCook={handleCook}></Recipes>

        {/* Sidebar section */}
        <Sidebar
          handlePrepare={handlePrepare}
          preparing={preparing}
          recipeQueue={recipeQueue}
        ></Sidebar>
      </section>
    </div>
  );
}
