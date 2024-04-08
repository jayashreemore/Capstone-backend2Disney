import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';

// Import routes
import princessRoutes from './controllers/princess.mjs';
import princeRoutes from './controllers/prince.mjs';
import movieRoutes from './controllers/movie.mjs';


// Create express application
const app = express();
const PORT = process.env.PORT || 5050;

// Set up view engine
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Connect to MongoDB
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.use("/princesses", princessRoutes);
app.use("/princes", princeRoutes);
app.use("/movies", movieRoutes);
// Root route
app.get('/', (req, res) => {
    res.send(
        `<div> 'Welcome to my daughters Favorite Disney Movie's Characters -Princess and Prince project!'<br>
        <br /><a href='/princesses'>Princesses</a><br><br /><a href='/princes'>Princes</a></div> <br><br /><a href='/movies'>Movies</a></div>`
        );
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
