import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";


export default function App() {
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
       <Recipes></Recipes>

        {/* Sidebar section */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
}
