# **Fusion API**

## **Overview**
The Fusion API is the backend service for the Fusion App, providing functionalities for meal planning, recipe browsing, grocery list management, and user authentication. The API integrates with third-party services such as the Spoonacular API and Nutritionix API to fetch recipes and nutritional information, and Firebase for user authentication and data storage. The API is hosted on [Render.com](https://render.com), making it accessible for the Fusion Android app in Android Studio.

## **Project Structure**

### 1. **Controllers**
- **mealPlansController.js:** Handles meal plan-related functionality, including creating, updating, and retrieving meal plans.
- **recipesController.js:** Fetches recipes and recipe details from third-party services such as Spoonacular API.
- **shoppingListController.js:** Manages the user's shopping list, allowing items to be added, removed, or marked as complete.
- **usersController.js:** Handles user operations such as registration, login, and profile management via Firebase Authentication.

### 2. **Services**
- **firebaseService.js:** Provides methods for interacting with Firebase Realtime Database and Authentication. Manages user data such as meal plans, shopping lists, and favorites.
- **nutritionixService.js:** Communicates with the Nutritionix API to retrieve nutritional data for ingredients and meals.
- **spoonacularService.js:** Integrates with the Spoonacular API to fetch detailed recipe information including ingredients, instructions, and nutritional facts.

### 3. **Routes**
- **mealPlans.js:** API routes related to meal planning, allowing users to create, update, and view their meal plans.
- **recipes.js:** Routes for fetching recipe data from external services.
- **shoppingList.js:** Routes to manage the user's shopping list, including adding, removing, or marking items as checked.
- **users.js:** User-related routes, including registration, login, and profile updates.

### 4. **Utils**
- **authMiddleware.js:** Middleware that ensures users are authenticated before accessing specific routes by validating Firebase tokens.

## **Key API Features**

### 1. **Recipe Management**
- Users can browse recipes via interaction with the Spoonacular API. Recipe information, including ingredients, preparation steps, and nutritional data, is managed by `recipesController.js` and its routes in `recipes.js`.

### 2. **Meal Planning**
- Users can create, update, and retrieve personalized meal plans for specific days of the week, stored in Firebase. This functionality is managed by `mealPlansController.js`, with routes defined in `mealPlans.js`.

### 3. **Shopping List Management**
- Users can manage their grocery shopping lists, with the ability to add, remove, and check off items. All data is saved in Firebase for real-time updates. The functionality is managed by `shoppingListController.js`, with routes in `shoppingList.js`.

### 4. **User Authentication**
- Firebase Authentication handles user sign-ups, logins, and session management. Firebase tokens are validated through `authMiddleware.js`. User operations are managed by `usersController.js`, with routes in `users.js`.

### 5. **Nutritional Analysis**
- The API integrates with the Nutritionix API to provide nutritional analysis for ingredients and meals, managed by `nutritionixService.js`.

## **Setup Instructions**

### 1. **Clone the Repository**
Clone the Fusion API repository to your local machine:
```bash
git clone <repository_url>
