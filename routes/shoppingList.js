// routes/shoppingList.js

const express = require(`express`);
const router = express.Router();
const shoppingListController = require(`../controllers/shoppingListController`);
const authMiddleware = require(`../utils/authMiddleware`);

// Add ingredients to shopping list
router.post(`/items`, authMiddleware, shoppingListController.addItems);

// Get shopping list
router.get(`/`, authMiddleware, shoppingListController.getShoppingList);

module.exports = router;
