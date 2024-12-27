const mongoose = require('mongoose');

const venusScoreSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    resources: {
        fuel: {
            type: Number,
            required: true,
        },
        water: {
            type: Number,
            required: true,
        },
        food: {
            type: Number,
            required: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const VenusScore = mongoose.model('VenusScore', venusScoreSchema);

module.exports = VenusScore;