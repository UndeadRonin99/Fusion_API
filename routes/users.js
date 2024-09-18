// routes/users.js

const express = require(`express`);
const router = express.Router();
const usersController = require(`../controllers/usersController`);
const authMiddleware = require(`../utils/authMiddleware`);

// Save recipe for offline access
router.post(`/saved-recipes`, authMiddleware, usersController.saveRecipe);

// Get saved recipes
router.get(`/saved-recipes`, authMiddleware, usersController.getSavedRecipes);

module.exports = router;
