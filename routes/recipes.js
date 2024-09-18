// routes/recipes.js

const express = require(`express`);
const router = express.Router();
const recipesController = require(`../controllers/recipesController`);
const authMiddleware = require(`../utils/authMiddleware`);

// Search recipes
router.get(`/search`, authMiddleware, recipesController.searchRecipes);

// Get nutrition information
router.get(`/:recipeId/nutrition`, authMiddleware, recipesController.getNutritionInfo);

module.exports = router;
