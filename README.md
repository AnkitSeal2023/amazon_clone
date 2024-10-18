# E-Commerce Website (Amazon Clone)

This project is an **e-commerce website** similar to Amazon, built to display products from various retailers. Users can sign up, browse products, add items to their cart, and manage their accounts. This app incorporates features like user authentication, product management, and an interactive user interface.

## Features

- **User Authentication**:
  - JWT-based user authentication for secure login and access control.
  - Email validation for new user sign-ups.

- **Product Listings**:
  - Browse products from various retailers.
  - Add items to the shopping cart.
  - Dynamic rendering of product pages using ReactJS and Hooks.

- **Shopping Cart**:
  - Add products to the cart.
  - View the cart summary, including the total number of items and total cost.

- **Client Location Tracking**:
  - Integration of Ipapi API to track and display user location.

## Technologies Used

### Frontend:
- **HTML/CSS/JavaScript**: Structure and styling for the web pages.
- **ReactJS**:
  - Utilized React Hooks like `useState` and `useEffect` for dynamic UI updates.
  - Developed product and user interface pages.

### Backend:
- **Node.js & ExpressJS**:
  - Used ExpressJS for routing, server-side logic, and handling API endpoints.
  - Middleware for request validation and user authentication.
  
- **MongoDB & Mongoose**:
  - MongoDB for the database, handling users, products, and cart data.
  - Mongoose for object modeling and interactions with MongoDB.

### Other:
- **JWT (JSON Web Token)** for user authentication and route protection.
- **Ipapi API** for tracking client locations.

## Pages

- **Landing Page**: Displays featured products and categories.
- **Product Page**: View detailed information about individual products.
- **Sign Up / Sign In Page**: Register or log in to the website.
- **Cart Page**: Manage items added to your shopping cart.

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables in `.env` files:
   ```
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   IPAPI_KEY=your_ipapi_key
   ```

3. Start the server:
   ```
   npm start
   ```

4. Navigate to `http://localhost:5173` in your browser.

## Usage

- **Sign Up**: Create a new account with email validation.
- **Login**: Access your account using JWT-based authentication.
- **Browse Products**: Navigate through various products listed by retailers.
- **Add to Cart**: Select items to add to your shopping cart and view them later.

## Future Enhancements

- Implementing search functionality for products (in progress).

## License

This project is licensed under the MIT License.
