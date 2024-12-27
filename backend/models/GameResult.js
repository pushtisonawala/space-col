// models/GameResult.js
const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({
    playerName: { type: String, required: true },
    completed: { type: Boolean, required: true },
    timeTaken: { type: Number, required: true }, // Time taken in seconds
    speed: { type: Number, required: true }, // Words per minute
    wordsCorrect: { type: Number, required: true }, // Number of correct words found
    createdAt: { type: Date, default: Date.now }, // Timestamp for when the result was saved
});

const GameResult = mongoose.model('GameResult', gameResultSchema);
module.exports = GameResult;