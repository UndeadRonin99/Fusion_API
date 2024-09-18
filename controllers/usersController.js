// controllers/usersController.js

const spoonacularService = require('../services/spoonacularService');
const { db } = require('../services/firebaseService');

exports.saveRecipe = async (req, res) => {
  const { recipeId } = req.body;
  const userId = req.user.uid;

  try {
    // Get full recipe details
    const recipeDetails = await spoonacularService.getRecipeDetails(recipeId);

    // Save to Firebase
    await db
      .collection('users')
      .doc(userId)
      .collection('savedRecipes')
      .doc(recipeId)
      .set(recipeDetails);

    res.json({ message: 'Recipe saved successfully' });
  } catch (error) {
    console.error('Error saving recipe:', error);
    res.status(500).json({ error: 'Error saving recipe' });
  }
};

exports.getSavedRecipes = async (req, res) => {
  const userId = req.user.uid;

  try {
    const savedRecipesSnapshot = await db
      .collection('users')
      .doc(userId)
      .collection('savedRecipes')
      .get();

    const savedRecipes = savedRecipesSnapshot.docs.map((doc) => doc.data());

    res.json(savedRecipes);
  } catch (error) {
    console.error('Error getting saved recipes:', error);
    res.status(500).json({ error: 'Error getting saved recipes' });
  }
};
