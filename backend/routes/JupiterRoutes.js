// routes/JupiterRoutes.js
const express = require('express');
const router = express.Router();

const GameResult = require('../models/GameResult'); // Import the GameResult model

// Get game state by gameId
router.get('/game/:gameId', async (req, res) => {
    try {
        const game = await Jupiter.findById(req.params.gameId);
        if (!game) return res.status(404).send('Game not found');
        res.status(200).json(game);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Save game results
router.post('/saveResults', async (req, res) => {
    const { playerName, completed, timeTaken, speed, wordsCorrect } = req.body;

    const gameResult = new GameResult({
        playerName,
        completed,
        timeTaken,
        speed,
        wordsCorrect,
    });

    try {
        await gameResult.save(); // Save the game result to the database
        res.status(201).json({ message: 'Game results saved successfully', data: gameResult });
    } catch (error) {
        res.status(500).send('Error saving game results');
    }
});

module.exports = router;