const express = require('express');
const router = express.Router();
const VenusScore = require('../models/venus');

// Save score route
router.post('/saveScore', async (req, res) => {
    const { playerName, score, resources } = req.body;

    try {
        const newScore = new VenusScore({
            playerName,
            score,
            resources,
        });

        await newScore.save();
        res.status(201).json({ success: true, message: 'Score saved successfully!' });
    } catch (error) {
        console.error('Error saving score:', error);
        res.status(500).json({ success: false, message: 'Error saving score' });
    }
});

module.exports = router;