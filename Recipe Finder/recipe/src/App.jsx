import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Spaghetti", "Eggs", "Cheese", "Bacon", "Pepper"],
      instructions: "Boil pasta. Mix eggs and cheese. Fry bacon. Combine everything.",
    },
    {
      id: 2,
      title: "Avocado Toast",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon"],
      instructions: "Toast bread. Mash avocado. Spread on toast. Season with salt, pepper, and lemon.",
    },
    {
      id: 3,
      title: "Chicken Curry",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Chicken", "Onion", "Garlic", "Tomato", "Spices"],
      instructions: "Cook onions, garlic, and tomatoes. Add chicken and spices. Simmer until cooked.",
    },
    {
      id: 4,
      title: "Vegetable Stir Fry",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Bell Peppers", "Carrot", "Broccoli", "Soy Sauce", "Garlic"],
      instructions: "Stir-fry vegetables with garlic and soy sauce until tender.",
    },
    {
      id: 5,
      title: "Pancakes",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Flour", "Milk", "Eggs", "Baking Powder", "Sugar"],
      instructions: "Mix ingredients. Pour batter on a hot pan. Flip when bubbles appear.",
    },
    {
      id: 6,
      title: "Caesar Salad",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
      instructions: "Toss all ingredients together and serve.",
    },
    {
      id: 7,
      title: "Beef Tacos",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Ground Beef", "Tortillas", "Lettuce", "Tomato", "Cheese"],
      instructions: "Cook beef with spices. Serve in tortillas with toppings.",
    },
    {
      id: 8,
      title: "Tomato Soup",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Tomatoes", "Garlic", "Onion", "Broth", "Cream"],
      instructions: "Blend cooked tomatoes, garlic, and onion. Simmer with broth. Add cream.",
    },
    {
      id: 9,
      title: "Grilled Cheese Sandwich",
      imageUrl: "https://via.placeholder.com/150",
      ingredients: ["Bread", "Cheese", "Butter"],
      instructions: "Butter bread, place cheese between slices, and grill until golden.",
    }
  ];

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full max-w-md mx-auto p-2 border border-gray-300 rounded-md shadow-sm"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-2 text-center">{recipe.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <h2 className="text-center text-xl font-bold">Recipe not found</h2>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} className="w-60 h-60 object-cover rounded-lg shadow-md" />
      <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
      <p className="text-gray-700 text-center max-w-md">{recipe.instructions}</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">Back to Recipes</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;