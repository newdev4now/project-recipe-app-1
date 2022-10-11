import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const [recipeFormInputData, setRecipeFormInputData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    event.persist();
    const newRecipeInput = (recipeFormData) => ({
      ...recipeFormData,
      [event.target.name]: event.target.value,
    });
    setRecipeFormInputData(newRecipeInput);
  };

  const handleRecipeSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name: recipeFormInputData.name,
      cuisine: recipeFormInputData.cuisine,
      photo: recipeFormInputData.photo,
      ingredients: recipeFormInputData.ingredients,
      preparation: recipeFormInputData.preparation,
    };

    const newRecipes = [...recipes, newRecipe];
    setRecipes(newRecipes);

    event.target.reset();
  };

  const addRecipe = () => {
    const newRecipe = {
      name: recipeFormInputData.name,
      cuisine: recipeFormInputData.cuisine,
      photo: recipeFormInputData.photo,
      ingredients: recipeFormInputData.ingredients,
      preparation: recipeFormInputData.preparation,
    };

    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (index) => {
    const newRecipes = [...recipes];

    newRecipes.splice(index, 1);

    setRecipes(newRecipes);
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        recipes={recipes}
        addRecipe={addRecipe}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate
        handleRecipeSubmit={handleRecipeSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
