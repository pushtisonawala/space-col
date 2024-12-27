const mongoose = require('mongoose');
const url = process.env.MONGO_URI;

mongoose
    .connect(url)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Error in MongoDB connection:", err);
    });

// Exporting mongoose (optional for future use)
module.exports = mongoose;
