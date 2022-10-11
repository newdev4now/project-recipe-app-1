import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  const recipe = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td name="name">{name}</td>
        <td name="cuisine">{cuisine}</td>
        <td name="photo">
          <img className="scale-down" src={photo} alt="" />
        </td>
        <td name="ingredients" className="content_td">
          <p>{ingredients}</p>
        </td>
        <td name="preparation" className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="delete" type="submit" onClick={() => deleteRecipe(index)}>
            Delete
          </button>
        </td>
      </tr>
    )
  );

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th name="name">Name</th>
            <th name="cuisine">Cuisine</th>
            <th name="photo">Photo</th>
            <th name="ingredients">Ingredients</th>
            <th name="preparation">Preparation</th>
            <th name="actions">Actions</th>
          </tr>
        </thead>
        <tbody>{recipe}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
