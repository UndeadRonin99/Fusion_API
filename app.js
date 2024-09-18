// app.js

require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
const recipesRouter = require('./routes/recipes');
const shoppingListRouter = require('./routes/shoppingList');
const usersRouter = require('./routes/users');
const mealPlansRouter = require('./routes/mealPlans');

app.use('/recipes', recipesRouter);
app.use('/shopping-list', shoppingListRouter);
app.use('/users', usersRouter);
app.use('/meal-plans', mealPlansRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
