// princess.js

import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Define the Princess schema
const princessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dressColor: {
        type: String,
        required: true
    },
    bestFriend: {
        type: String,
        required: true
    }
});

// Define the Princess model
const Princess = mongoose.model('Princess', princessSchema);

// Route to get all Disney Princesses
router.get('/', async (req, res) => {
    try {
        const princesses = await Princess.find();
        res.json(princesses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get details of a specific Disney Princess by ID
router.get('/:id', async (req, res) => {
    try {
        const princess = await Princess.findById(req.params.id);
        if (princess) {
            res.json(princess);
        } else {
            res.status(404).json({ message: 'Princess not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
