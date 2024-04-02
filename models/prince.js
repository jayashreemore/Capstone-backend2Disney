import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const Prince = mongoose.model(
  'Prince',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    movie: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    outfitColor: {
      type: String,
      required: true,
    },
    bestFriend: {
      type: String,
      required: true,
    },
  })
);

router.get('/', async (req, res) => {
  try {
    const princes = await Prince.find();
    res.json(princes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const prince = await Prince.findById(req.params.id);
    if (prince) {
      res.json(prince);
    } else {
      res.status(404).json({ message: 'Prince not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
