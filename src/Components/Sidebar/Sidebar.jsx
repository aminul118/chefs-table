export default function Sidebar({ recipeQueue, handlePrepare, preparing }) {
  return (
    <div className="w-1/3 ml-4 border text-center  ">
      <h1 className="text-xl font-semibold">
        Want to cook: {recipeQueue.length}
      </h1>
      {/* Want to cook table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handlePrepare(recipe.recipe_id);
                    }}
                    className="btn bg-blue-600 text-white rounded-full"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Curently cook table */}
      <div className="overflow-x-auto">
        <h1 className="text-xl font-semibold mt-4">
          Currently cooking: {preparing.length}
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {preparing.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
