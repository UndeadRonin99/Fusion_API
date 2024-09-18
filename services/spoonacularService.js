// services/spoonacularService.js

const axios = require('axios');

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

exports.searchRecipes = async (query, diet, cuisine, maxReadyTime) => {
  const endpoint = `${BASE_URL}/recipes/complexSearch`;

  const params = {
    apiKey: SPOONACULAR_API_KEY,
    query,
    diet,
    cuisine,
    maxReadyTime,
  };

  try {
    const response = await axios.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

exports.getRecipeIngredients = async (recipeId) => {
  const endpoint = `${BASE_URL}/recipes/${recipeId}/information`;

  const params = {
    apiKey: SPOONACULAR_API_KEY,
    includeNutrition: false,
  };

  try {
    const response = await axios.get(endpoint, { params });
    return response.data.extendedIngredients;
  } catch (error) {
    throw error;
  }
};

// services/spoonacularService.js

exports.getRecipeDetails = async (recipeId) => {
    const endpoint = `${BASE_URL}/recipes/${recipeId}/information`;
  
    const params = {
      apiKey: SPOONACULAR_API_KEY,
      includeNutrition: true,
    };
  
    try {
      const response = await axios.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  