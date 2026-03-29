🌍 TripNest – Project Functionalities

🔗 Live Demo: https://trepnest.onrender.com

TripNest is a full-stack travel accommodation platform that allows users to explore unique stays, create property listings, upload images, and share reviews. The application provides a seamless user experience with secure authentication, cloud image storage, and a responsive modern interface.

🚀 Core Functionalities
🏡 Property Listing System

Users can browse and explore a wide variety of travel accommodations including hotels, apartments, villas, and unique stays.

🔍 Category-Based Filtering

Listings are organized into categories such as rooms, villas, mountains, and trending destinations, making property discovery easier.

🔎 Search & Filter Options

Users can quickly find listings using search functionality and category-based filters.

🧑‍💻 User Authentication

Secure signup, login, and logout functionality implemented with session-based authentication.

✍️ Create Listings

Authenticated users can add new listings with details such as title, price, location, description, and images.

✏️ Edit Listings

Listing owners can update property information whenever required.

❌ Delete Listings

Owners have the ability to remove their listings from the platform.

⭐ Review & Rating System

Users can leave reviews and star ratings for properties, with a default rating of 3 stars.

🖼 Cloud Image Upload

Property images are uploaded and managed using Cloudinary for scalable cloud storage.

📍 Location Management

Each listing contains location details including city, country, and geographical coordinates.

🛡 Authorization & Ownership Protection

Authorization middleware ensures that only the property owner can edit or delete their listings.

⚠️ Error Handling System

Custom middleware handles application errors and improves debugging and stability.

🗂 Session Management

User sessions are securely stored using connect-mongo with MongoDB for persistent authentication.

🗄 Database Integration

All application data including users, listings, and reviews are stored in MongoDB using Mongoose.

🎨 Responsive UI Design

Modern and fully responsive interface built using Tailwind CSS and EJS templating.

🧭 Dynamic Routing

Server-side routing and application logic implemented with Express.js.

☁️ Deployment Ready

The project is deployed on Render with secure environment-based configuration.
