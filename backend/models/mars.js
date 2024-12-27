const mongoose = require('mongoose');

// Define the schema for the score
const scoreSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

// Create the model from the schema
const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
