# TradeWell-Best_MarketPlace_for_Used_Goods
Marketplace platform for buying and selling of used goods.
README: Used Goods Marketplace Frontend
This file provides a brief overview of the Used Goods Marketplace project, focusing on the current frontend implementation and planned future work.

Project Title and Concept

Project Title: Used Goods Marketplace

Concept: The Used Goods Marketplace is a simple, single-page application (SPA) style web platform designed for users to buy, sell, and browse used items. The core idea is to simulate the functionality of popular second-hand trading platforms using pure HTML, CSS, and JavaScript, leveraging the browser's Local Storage for all data persistence (user accounts, product listings, cart, and favorites).

The current implementation focuses entirely on frontend functionality using Local Storage.
User Authentication (via login.html):
Allows users to Register new accounts.
Allows existing users to Login (stores loggedInUser email in Local Storage).

Product Listing (via sell.html):
Users can post new items for sale, including Title, Description, Price, Category, and Image (image is converted to a Base64 string for storage).
The posting user is automatically set as the item's ownerEmail.

Browsing and Filtering (via browse.html):
Displays all static and user-posted products.
Allows filtering by Category and Search text.
Supports sorting by Price (Asc/Desc) and Newest First.
Includes "Add to Cart," "Save (Favorite)," and "Message" buttons (only enabled for logged-in users who are not the product owner).
Allows the product owner to Delete their own listings.

Cart and Favorites Management:
Cart (cart.html): Displays items added by the current user and calculates the total price. Users can remove items.
Favorites (favorite.html): Displays a list of saved items for the logged-in user.

Static Data Initialization: Initial static product posts are injected into Local Storage on the first visit to populate the Browse page for demonstration purposes.
Sticky Footer: Implemented using CSS Flexbox on all main pages to ensure the footer stays at the bottom of the viewport.

README: Used Goods Marketplace Frontend
This file provides a brief overview of the Used Goods Marketplace project, focusing on the current frontend implementation and planned future work.

Project Title and Concept
Project Title: Used Goods Marketplace

Concept: The Used Goods Marketplace is a simple, single-page application (SPA) style web platform designed for users to buy, sell, and browse used items. The core idea is to simulate the functionality of popular second-hand trading platforms using pure HTML, CSS, and vanilla JavaScript, leveraging the browser's Local Storage for all data persistence (user accounts, product listings, cart, and favorites).

Features Implemented in This Frontend Version
The current implementation focuses entirely on frontend functionality using Local Storage for a persistent demo experience:

User Authentication (via login.html):

Allows users to Register new accounts.

Allows existing users to Login (stores loggedInUser email in Local Storage).

Product Listing (via sell.html):

Users can post new items for sale, including Title, Description, Price, Category, and Image (image is converted to a Base64 string for storage).

The posting user is automatically set as the item's ownerEmail.

Browsing and Filtering (via browse.html):

Displays all static and user-posted products.

Allows filtering by Category and Search text.

Supports sorting by Price (Asc/Desc) and Newest First.

Includes "Add to Cart," "Save (Favorite)," and "Message" buttons (only enabled for logged-in users who are not the product owner).

Allows the product owner to Delete their own listings.

Cart and Favorites Management:

Cart (cart.html): Displays items added by the current user and calculates the total price. Users can remove items.

Favorites (favorite.html): Displays a list of saved items for the logged-in user.

Static Data Initialization: Initial static product posts are injected into Local Storage on the first visit to populate the Browse page for demonstration purposes.

Sticky Footer: Implemented using CSS Flexbox on all main pages to ensure the footer stays at the bottom of the viewport.

Future Improvements Planned for Backend Integration:
This project is currently frontend-only. The planned improvements and next steps involve integrating a dedicated backend to evolve from a Local Storage demo to a fully functional application:
Database Integration: Replace Local Storage with a proper database (e.g., PostgreSQL or MongoDB) to handle large volumes of data and secure transactions.
API Development: Build a RESTful API (using Node.js/Express, Python/Flask, etc.) to manage endpoints for products, users, cart, and favorites.
