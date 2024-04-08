import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prince: {
        type: String,
        required: true
    },
    princess: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    readyToWatch: {
        type: Boolean,
        default: false  // Assuming movies are not ready to watch by default
    }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
