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
import userRoutes from './controllers/user.mjs';


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



// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.use("/movies", movieRoutes);
app.use("/princesses", princessRoutes);
app.use("/princes", princeRoutes);
app.use("/users", userRoutes);

// Root route for all -princes, princesses, movies, users all together 
app.get('/', (req, res) => {
    res.send(
        `<div> 'Welcome to my daughters Favorite Disney Movie's project! '<br><br />

        <a href='/princesses'>Princesses</a><br><br />

        <a href='/princes'>Princes</a></div> <br><br />

        <a href='/movies'>Movies</a><br>

        <br /><a href='/users'>Users</a></div>`
        );
});
////////==============Prince routes=========

// app.use("/princes", princeRoutes);

// app.get('/', (req, res) => {
//     res.send(
//         `<div> this is my prince and princess root route <br/><a href='/princes'>princes</a></div>`
//     );
// });

//==============Princess routes=========

// app.use("/princesses", princessRoutes);

// app.get('/', (req, res) => {
//     res.send(
//         `<div> this is my prince and princess root route <br/><a href='/princesses'>princesses</a></div>`
//     );
// }); 

////////////////Movies routes==========
// app.use("/movies", movieRoutes);

// app.get('/', (req, res) => {
//     res.send(
//         `<div> this is my movie root route <br/><a href='/movies'>movies</a></div>`
//     );
// });


app.listen(PORT, () => {
    console.log(`listening`);
});
