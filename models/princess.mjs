
import mongoose, { mongo } from 'mongoose';

const princessSchema = new mongoose.Schema({
  
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
  dressColor: {
    type: String,
    required: true,
  },
  bestFriend: {
    type: String,
    required: true,
  },
  readyToWatch: Boolean
});

const Princess = mongoose.model('Princess', princessSchema);

export default Princess; 
