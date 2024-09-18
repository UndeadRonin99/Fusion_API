// routes/mealPlans.js

const express = require(`express`);
const router = express.Router();
const mealPlansController = require(`../controllers/mealPlansController`);
const authMiddleware = require(`../utils/authMiddleware`);

// Create a meal plan
router.post(`/`, authMiddleware, mealPlansController.createMealPlan);

// Get meal plans
router.get(`/`, authMiddleware, mealPlansController.getMealPlans);

// Update a meal plan
router.put(`/:mealPlanId`, authMiddleware, mealPlansController.updateMealPlan);

// Delete a meal plan
router.delete(`/:mealPlanId`, authMiddleware, mealPlansController.deleteMealPlan);

module.exports = router;
