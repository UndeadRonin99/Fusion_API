// controllers/shoppingListController.js

const spoonacularService = require('../services/spoonacularService');
const { rtdb } = require('../services/firebaseService');  // Use rtdb instead of db

exports.addItems = async (req, res) => {
  const { recipeId } = req.body;
  const userId = req.user.uid;

  try {
    const ingredients = await spoonacularService.getRecipeIngredients(recipeId);

    // Save to Firebase RTDB
    const shoppingListRef = rtdb.ref(`users/${userId}/shoppingList`);

    const updates = {};
    ingredients.forEach((ingredient) => {
      const newItemRef = shoppingListRef.push(); // RTDB's push() generates a unique ID
      updates[newItemRef.key] = {
        name: ingredient.name,
        amount: ingredient.amount,
        unit: ingredient.unit,
        category: ingredient.aisle || 'Uncategorized',
      };
    });

    await shoppingListRef.update(updates);

    res.json({ message: 'Ingredients added to shopping list' });
  } catch (error) {
    console.error('Error adding ingredients to shopping list:', error);
    res.status(500).json({ error: 'Error adding ingredients to shopping list' });
  }
};

exports.getShoppingList = async (req, res) => {
  const userId = req.user.uid;

  try {
    const shoppingListSnapshot = await rtdb
      .ref(`users/${userId}/shoppingList`)
      .once('value');  // Fetch data from RTDB

    const shoppingList = [];
    shoppingListSnapshot.forEach((doc) => {
      shoppingList.push({
        id: doc.key,
        ...doc.val(),
      });
    });

    res.json(shoppingList);
  } catch (error) {
    console.error('Error getting shopping list:', error);
    res.status(500).json({ error: 'Error getting shopping list' });
  }
};
