const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./models/db'); // Import db.js to connect MongoDB
const authRouter = require('./routes/SpaceRoute'); // Import the authentication router
const gameResultsRouter = require('./routes/JupiterRoutes'); // Renamed for clarity
const marsRoutes = require('./routes/marsRoutes');
const venusRoutes = require('./routes/venusRoutes');
const path = require('path'); // Use require for path
const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

// Use the router for authentication routes
app.use('/auth', authRouter);
app.use('/mars', marsRoutes);
// Use the router for game results routes
app.use('/venus', venusRoutes); // Use the router for Venus game results routes
app.use('/jupiter', gameResultsRouter); // Updated endpoint for game results routes

app.listen(PORT, () => {
    console.log(`Your app is running on PORT ${PORT}`);
});