export default function Sidebar({ recipeQueue }) {
  return (
    <div className="w-1/3 ml-4">
      <h1>Want to cook: {recipeQueue.length}</h1>
    </div>
  );
}
