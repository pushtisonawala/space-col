const express = require('express');
const cors = require('cors');
const compression = require('compression'); // Gzip compression
const path = require('path');
require('dotenv').config();
require('./models/db'); // MongoDB connection

const authRouter = require('./routes/SpaceRoute');
const gameResultsRouter = require('./routes/JupiterRoutes');
const marsRoutes = require('./routes/marsRoutes');
const venusRoutes = require('./routes/venusRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(compression()); // Enable gzip compression

// Routes
app.use('/auth', authRouter);
app.use('/mars', marsRoutes);
app.use('/venus', venusRoutes);
app.use('/jupiter', gameResultsRouter);

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend/build');
app.use(express.static(frontendPath));

// Catch-all route to serve the React app for unknown endpoints
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Your app is running on PORT ${PORT}`);
});
