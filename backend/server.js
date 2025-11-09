const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from a .env file

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 by default

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) so your
// React app (running on a different port) can make requests to this server.
app.use(cors());

// Enable the server to accept and parse JSON in request bodies.
app.use(express.json());

// --- Database Connection ---
// We will set the MONGO_URI in a new .env file in the next step.
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// --- API Routes ---
// This tells Express that any request starting with '/api'
// should be handled by the 'apiRoutes' file we are about to create.
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// --- Start Server ---
// This command starts the server and logs a message to the console.
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});