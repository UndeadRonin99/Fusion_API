// controllers/recipesController.js

const spoonacularService = require('../services/spoonacularService');
const nutritionixService = require('../services/nutritionixService');

exports.searchRecipes = async (req, res) => {
  const { query, diet, cuisine, maxReadyTime } = req.query;

  try {
    const recipes = await spoonacularService.searchRecipes(query, diet, cuisine, maxReadyTime);
    res.json(recipes);
  } catch (error) {
    console.error('Error searching recipes:', error);
    res.status(500).json({ error: 'Error searching recipes' });
  }
};

exports.getNutritionInfo = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const nutritionInfo = await nutritionixService.getNutritionInfo(recipeId);
    res.json(nutritionInfo);
  } catch (error) {
    console.error('Error getting nutrition info:', error);
    res.status(500).json({ error: 'Error getting nutrition info' });
  }
};
