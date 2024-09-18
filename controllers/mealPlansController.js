// controllers/mealPlansController.js

const { db } = require('../services/firebaseService');

exports.createMealPlan = async (req, res) => {
  const userId = req.user.uid;
  const mealPlanData = req.body;

  try {
    const mealPlanRef = await db
      .collection('users')
      .doc(userId)
      .collection('mealPlans')
      .add(mealPlanData);

    res.json({ message: 'Meal plan created', mealPlanId: mealPlanRef.id });
  } catch (error) {
    console.error('Error creating meal plan:', error);
    res.status(500).json({ error: 'Error creating meal plan' });
  }
};

exports.getMealPlans = async (req, res) => {
  const userId = req.user.uid;

  try {
    const mealPlansSnapshot = await db
      .collection('users')
      .doc(userId)
      .collection('mealPlans')
      .get();

    const mealPlans = mealPlansSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(mealPlans);
  } catch (error) {
    console.error('Error getting meal plans:', error);
    res.status(500).json({ error: 'Error getting meal plans' });
  }
};

exports.updateMealPlan = async (req, res) => {
  const userId = req.user.uid;
  const { mealPlanId } = req.params;
  const updatedData = req.body;

  try {
    await db
      .collection('users')
      .doc(userId)
      .collection('mealPlans')
      .doc(mealPlanId)
      .update(updatedData);

    res.json({ message: 'Meal plan updated' });
  } catch (error) {
    console.error('Error updating meal plan:', error);
    res.status(500).json({ error: 'Error updating meal plan' });
  }
};

exports.deleteMealPlan = async (req, res) => {
  const userId = req.user.uid;
  const { mealPlanId } = req.params;

  try {
    await db
      .collection('users')
      .doc(userId)
      .collection('mealPlans')
      .doc(mealPlanId)
      .delete();

    res.json({ message: 'Meal plan deleted' });
  } catch (error) {
    console.error('Error deleting meal plan:', error);
    res.status(500).json({ error: 'Error deleting meal plan' });
  }
};
