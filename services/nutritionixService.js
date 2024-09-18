// services/nutritionixService.js

const axios = require('axios');
const spoonacularService = require('./spoonacularService');

const NUTRITIONIX_APP_ID = process.env.NUTRITIONIX_APP_ID;
const NUTRITIONIX_API_KEY = process.env.NUTRITIONIX_API_KEY;
const BASE_URL = 'https://trackapi.nutritionix.com/v2';

exports.getNutritionInfo = async (recipeId) => {
  try {
    // Get ingredients from Spoonacular
    const ingredients = await spoonacularService.getRecipeIngredients(recipeId);

    // Prepare query string
    const query = ingredients
      .map((ingredient) => `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`)
      .join('\n');

    // Request to Nutritionix
    const endpoint = `${BASE_URL}/natural/nutrients`;
    const headers = {
      'x-app-id': NUTRITIONIX_APP_ID,
      'x-app-key': NUTRITIONIX_API_KEY,
      'Content-Type': 'application/json',
    };
    const body = { query };

    const response = await axios.post(endpoint, body, { headers });

    return response.data;
  } catch (error) {
    throw error;
  }
};
