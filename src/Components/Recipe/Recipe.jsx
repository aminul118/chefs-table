export default function Recipe({ recipe }) {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl ">
        <figure>
          <img
            className="h-52 w-full "
            src={recipe_image}
            alt={`Recipe name ${recipe_name}`}
          />
        </figure>
        <div className="p-3">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <div className="divider "></div>
          <h2 className="font-semibold text-xl">
            Ingredients: {ingredients.length}
          </h2>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
          <div className="divider "></div>
          <div className="flex justify-between">
            <p>{preparing_time}</p>
            <p>{calories}</p>
          </div>
          <button className="btn bg-blue-600 text-white rounded-full mt-4">Want to cook</button>

        </div>
      </div>
    </div>
  );
}
