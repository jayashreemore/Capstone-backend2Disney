
import mongoose, { mongo } from 'mongoose';

const princeSchema = new mongoose.Schema({
  
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
  readyToWatch: Boolean
});

const Prince = mongoose.model('Prince', princeSchema);

export default Prince; 
