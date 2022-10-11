import React from "react";

function RecipeCreate({ handleRecipeSubmit, handleChange }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleRecipeSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                required="required"
                placeholder="Name"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                required="required"
                placeholder="Cuisine"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="photo"
                type="text"
                required="required"
                placeholder="URL"
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                type="text"
                placeholder="List your ingredients"
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                type="text"
                placeholder="Preparation instructions"
                onChange={handleChange}
              />
            </td>
            <td>
              <button name="create" type="submit">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
