const express = require('express');
const router = express.Router();
const Score = require('../models/mars');

// Save Score Route
router.post('/saveScore', async (req, res) => {
  try {
    const { playerName, score } = req.body;

    // Create a new score instance
    const newScore = new Score({
      playerName,
      score,
    });

    // Save the score to the database
    await newScore.save();
    res.status(200).send({ success: true, message: 'Score saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: 'Error saving score' });
  }
});

// Get High Scores Route
router.get('/getScores', async (req, res) => {
  try {
    const highScores = await Score.find().sort({ score: -1 }).limit(5); // Get top 5 scores
    res.status(200).json(highScores);
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: 'Error fetching high scores' });
  }
});

module.exports = router;
