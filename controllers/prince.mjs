import express from 'express';
const router = express.Router();

import Prince from '../models/prince.mjs';
import db from '../db/conn.mjs';

/////////////////seed route


router.get('/seed', async (req, res) => {
    console.log('in seed');
    try{
        await Prince.create([
            {
                id: 1,
                name: 'Prince Charming',
                movie: 'Cinderella',
                age: 22,
                outfitColor: 'White',
                bestFriend: 'Mice and Birds'
            },
        
            {
                id: 2,
                name: 'Prince Phillip',
                movie: 'Sleeping Beauty',
                age: 18,
                outfitColor: 'Blue',
                bestFriend: 'Maleficent (in disguise)'
            },
        
            {
                id: 3,
                name: 'Maui',
                movie: 'Moana',
                age: '1000',
                outfitColor: 'Brown',
                bestFriend: 'Moana'
            }, 
        
            {
                id: 4,
                name: 'Kristoff',
                movie: 'Frozen',
                age: 24,
                outfitColor: 'Brown',
                bestFriend: 'Sven'
            },
        
            {
                id: 5,
                name: 'Hans',
                movie: 'Frozen',
                age: 23,
                outfitColor: 'Black',
                bestFriend: 'None (deceptive)'
            }
// Add more prince data from down below as needed
// Sample data for Disney Princes
//const princes = [
  /*  
    {
        id: 6,
        name: 'James',
        movie: 'Sofia the First',
        age: 10,
        outfitColor: 'Blue',
        bestFriend: 'Sofia'
    },
    
    {
        id: 7,
        name: 'Prince Hugo',
        movie: 'Sofia the First',
        age: 11,
        outfitColor: 'Green',
        bestFriend: 'Prince James'
    },
*/

        ])
        res.status(200).redirect('/princes');
    } catch (err) {
        res.status(400).send(err);
    }
});




// Route to get all Disney Princes
//I -Index-GET-READ-display a list of elements

router.get('/', async (req, res) =>{
    console.log("prince");
    try{
        const foundPrinces = await Prince.find({});
        res.status(200).send(foundPrinces);
    } catch (err) {
        res.status(400).send(err);
    }
})

//N - NEW -GET -allows user to input a new item in the list

router.get('/new', (req, res) => {
    res.sender('princes/New');
})

// D- DELETE -it ll delete item permanantly

router.delete('/:id', async(req, res) => {
    try{
        const deletedPrince = await Prince.findByIdAndDelete(req.params.id);
        console.log(deletedPrince);
        res.status(200).redirect('/princes');
    }  catch (err) {
        res.status(400).send(err);
    }
})

///U-UPDATE -updates list-PUT

router.put('/:id', async (req, res) => {
    if (req.body.readyToWatch === 'on') {
        req.body.readyToWatch = true;
    }   else {
        req.body.readyToWatch = false;
    }  
        try {
            const updatedPrince = await Prince.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true},
            );
                console.log(updatedPrince);
            res.redirect(`/princes/${req.params.id}`);
        }   catch(err) {
            res.status(400).send(err);
        }
})

//////C - CREATE - to create new -POST
//starting with post route to see things in database

router.post('/', async(req, res) => {
    // useful for user input form 
    if (req.body.readyToWatch === 'on') {
        req.body.readyToWatch = true;
    } else {
        req.body.readyToWatch = false;
    }
    console.log(req.body)

    try{
        const createdPrince = await Prince.create(req.body);
        } catch (err) {
            res.status(400).send(err);
        }
})

////E- EDIT -GET-update an existing entry in the database

router.get("/:id/edit", async (req, res) => {
    try {
        const foundPrince = await Prince.findById (req.params.id);
        res.status(200).render('princes/Edit', {prince: foundPrince});
    }  catch (err) {
        res.status(400).send(err);
    }
})

//////S-SHOW - GET-show route displays details of an individual Prince

// Route to get details of a specific Disney Prince by ID
router.get('/:id', async (req, res) => {
    try {
        const foundPrince = await Prince.findById(req.params.id);
        res.render('princes/Show', { prince: foundPrince});
    } catch (err) {
        res.status(400).send(err);
    }
    
});

export default router;
