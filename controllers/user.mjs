import express from 'express';
const router = express.Router();
import User from '../models/user.mjs';
import db from '../db/conn.mjs';

// These are my routes
// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD 
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element

// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await User.create([
            {
                name: "Pappu Matre",
                email: "pappu.jaan@gmail.com",
                Phone: 6148226124
            },
            {
                name: "Sam Rayder",
                email: "samrider123@gmail.com",
                Phone: 6148223333
            },
            {
                name: "Nancy Mayers",
                email: "nancy_mayers@gmail.com",
                Phone: 6148222222
            },
            {
                name: "steave brown",
                email: "steavebrown123@gmail.com",
                Phone: 6148221111
            }, 
            
        ])
        res.status(200).redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
});

// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
    try {
        const foundUsers = await User.find({});
        res.status(200).render('users/Index', { users: foundUsers})
        // res.status(200).send(foundVegetables);
    } catch (err) {
        res.status(400).send(err);
    }
})

// N - New - allows a user to input a new fruit
router.get('/new', (req, res) => {
    res.render('users/New');
})

// D - DELETE - allows a user to permanently remove an item from the database
router.delete('/:id', async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        console.log(deletedUser);
        res.status(200).redirect('/Users');
    } catch (err) {
        res.status(400).send(err);
    }
})


// U - UPDATE
router.put('/:id', async (req, res) => {

    try {
        const updatedUser= await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedUser);
        res.redirect(`/users/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

// C - CREATE
// I am starting with my post route so that I can see the things in my database
router.post('/', async(req, res) => {
    // // this will be useful when have a user input form
    try {
        const createdUser = await User.create(req.body);
        console.log("trying to create users")
        res.status(200).redirect('/Users');
    } catch (err) {
        res.status(400).send(err);
    }
})


// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.status(200).render('users/Edit', {user: foundUser});
        console.log("trying to edit")
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual fruit
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.render('users/Show', {user: foundUser});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;