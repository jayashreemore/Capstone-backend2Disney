import express from 'express';
const router = express.Router();
import Fruit from '../models/movie.mjs';
import db from '../db/conn.mjs';


// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Movie.create([

            {
                
                name: 'Cindrella',
                prince :'Prince Charming',
                princess: 'Cindrella',
                story: 'Cinderella is about a kind-hearted young woman who, with the help of her fairy godmother, attends a royal ball and captures the heart of Prince Charming. Despite facing hardships, she ultimately finds her happily ever after when the prince finds her using a glass slipper she leaves behind.',
                readyToWatch: 'true',  
            },

            {
                
                name: 'Sleeping Beauty',
                prince: 'Prince Phillip',
                princess: 'Aurora',
                story: 'Sleeping Beauty follows the story of Princess Aurora, who is cursed by an evil fairy to fall into a deep sleep on her sixteenth birthday. However, she is eventually awakened by true loves kiss from Prince Phillip, breaking the curse and leading to their happily ever after.',
                readyToWatch: 'false'
            },


            {
                id: 3,
                name: 'Moana',
                prince: 'Maui',
                princess: 'Moana',
                story: 'Moana tells the story of a brave young girl named Moana who sets sail on a daring mission to save her people. With the help of the demigod Maui, Moana embarks on a voyage across the ocean to find the legendary island of Te Fiti and restore the heart of Te Fiti, a powerful stone that controls the balance of life. Along the way, Moana faces numerous challenges and discovers her own identity as a wayfinder and leader, ultimately saving her island and fulfilling her destiny.',
                readyToWatch: 'true'
            },
            
            {
                id: 4,
                name: 'Frozen',
                prince: 'Kristoff',
                princess: 'Anna',
                story: 'Frozen tells the story of Princess Annas journey to find her estranged sister, Queen Elsa, whose icy powers have trapped their kingdom in eternal winter. Along the way, Anna teams up with Kristoff, an iceman, his loyal reindeer Sven, and a hilarious snowman named Olaf. Through love and sacrifice, Anna helps Elsa embrace her powers and restore summer to their kingdom.',
                readyToWatch: 'false'
            },
            {
                id: 5,
                name: 'Sofia the First',
                prince: 'Prince James',
                princess: 'Sofia',
                story: 'Sofia the First follows the story of a young girl named Sofia who becomes a princess when her mother marries King Roland II of the kingdom of Enchancia. Sofia learns the ropes of being a princess while attending the Royal Prep Academy with the help of her step-siblings, Amber and James. With the guidance of wise teachers and the support of her animal friends, Sofia navigates the challenges of royal life while learning important lessons about kindness, friendship, and bravery.',
                readyToWatch: 'true'
            }
            
                        
        ])
        res.status(200).redirect('/movies');
    } catch (err) {
        res.status(400).send(err);
    }
});

// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
    try {
        const foundMovies = await Movie.find({});
        res.status(200).render('movies/Index', { movies: foundMovies})
        res.status(200).send(foundmovies);
    } catch (err) {
        res.status(400).send(err);
    }
})

// N - New - allows a user to input a new movie
router.get('/new', (req, res) => {
    res.render('movies/New');
})

///////////delete-permanantly 
router.delete('/:id', async(req, res) => {
    try{
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        console.log(deletedMovie);
        res.status(200).redirect('/movies');
        } catch (err) {
            res.status(400).send(err);
        }
})

// U - UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.readyToWatch === 'on') {
        req.body.readyToWatch = true;
    } else {
        req.body.readyToWatch = false;
    }

    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedMovie);
        res.redirect(`/movies/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

// C - CREATE
// I am starting with my post route so that I can see the things in my database
router.post('/', async(req, res) => {
    // // this will be useful when have a user input form
    if (req.body.readyToWatch === 'on') { // if checked, req.body.readyToEat is set to 'on' - or the checkbox is checked
        req.body.readyToWatch = true;
    } else {                            // if not checked, then it was undefined
        req.body.readyToWatch = false;
    }
    console.log(req.body)

    try {
        const createdMovie = await Movie.create(req.body);
        res.status(200).redirect('/movies');
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundMovie = await Movie.findById(req.params.id);
        res.status(200).render('movies/Edit', {movie: foundMovie});
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual movie
router.get('/:id', async (req, res) => {
    try {
        const foundMovie = await Movie.findById(req.params.id);
        res.render('movies/Show', {movie: foundMovie});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;