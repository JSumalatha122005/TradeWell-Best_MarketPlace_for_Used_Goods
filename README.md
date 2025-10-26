🛍️ Used Goods Marketplace (Frontend)
Overview

Used Goods Marketplace is a simple, single-page web application that allows users to buy, sell, and browse used items.
The project demonstrates a functional marketplace built entirely with HTML, CSS, and JavaScript, using the browser’s Local Storage for all data persistence — including user accounts, product listings, cart, and favorites.

🎯 Project Concept

The goal of this project is to simulate the core functionality of popular second-hand trading platforms (like OLX or Facebook Marketplace) without any backend — ideal for educational or prototype purposes.

All data (users, products, and user activity) is stored and managed locally within the browser.

🚀 Features Implemented (Frontend)
🧑‍💻 User Authentication (login.html)

Register new user accounts.

Login with existing credentials.

Stores the logged-in user’s email in Local Storage (loggedInUser).

📦 Product Listing (sell.html)

Users can post new items for sale, including:

Title

Description

Price

Category

Image (converted to Base64 for storage)

The posting user is automatically saved as the product’s ownerEmail.

🔍 Browsing & Filtering (browse.html)

Displays both static and user-posted products.

Includes powerful filtering and sorting options:

Filter by Category

Search by Keyword

Sort by Price (Asc/Desc) and Newest First

Interactive user actions:

Add to Cart

Save (Favorite)

Message Seller

Buttons are only active for logged-in users who are not the product owner.

Product owners can delete their own listings.

🛒 Cart & Favorites Management

Cart (cart.html)

Displays all items added by the current user.

Calculates total price dynamically.

Allows item removal.

Favorites (favorite.html)

Displays saved items for the logged-in user.

Allows easy navigation back to product details.

🧩 Static Data Initialization

On first visit, the app injects default demo listings into Local Storage to populate the Browse page.

Provides an instant preview of marketplace functionality.

📐 Sticky Footer

Implemented using CSS Flexbox across all pages.

Ensures the footer remains anchored at the bottom of the viewport.

🧭 Future Improvements (Backend Integration)

The current version is frontend-only. The next development phase focuses on transitioning from Local Storage to a full backend architecture.

Planned Enhancements:

Database Integration
Replace Local Storage with a proper database such as PostgreSQL or MongoDB to handle larger data volumes and secure user transactions.

RESTful API Development
Implement backend endpoints using Node.js/Express or Python/Flask for managing:

User authentication

Product listings

Cart and favorites data

Messaging between users

Authentication & Security
Add secure login sessions, password encryption, and token-based authentication (JWT).

Image Uploads
Integrate cloud storage (e.g., AWS S3 or Cloudinary) for product images instead of Base64 storage.

🧠 Technologies Used
Layer	Technologies
Frontend	HTML5, CSS3, JavaScript
Storage	Local Storage API
Architecture	SPA (Single Page Application)
Styling	CSS Flexbox, Grid
📂 Folder Structure
Used-Goods-Marketplace/
│
├── index.html
├── login.html
├── browse.html
├── sell.html
├── cart.html
├── favorite.html
│
├── style.css
├── style_browser.css
│
├── script.js
