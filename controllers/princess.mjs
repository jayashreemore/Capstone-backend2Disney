import express from 'express';
const router = express.Router();
import Princess from '../models/princess.mjs';
import db from '../db/conn.mjs';

///////////////////seed route

router.get('/seed', async (req, res) => {
    console.log('in seed');
    try{
        await Princess.create([
    {
        id: 1,
        name: 'Cinderella',
        movie: 'Cinderella',
        age: 20,
        outfitColor: 'Blue',
        bestFriend: 'Fairy Godmother'
    },
    {
        id: 2,
        name: 'Aurora',
        movie: 'Sleeping Beauty',
        age: 16,
        outfitColor: 'Pink',
        bestFriend: 'Fairies'
    },

    {
        id: 3,
        name: 'Anna',
        movie: 'Frozen',
        age: 18,
        outfitColor: 'Green',
        bestFriend: 'Elsa'
    }, 

    {
        id: 4,
        name: 'Moana',
        movie: 'Moana',
        age: 16,
        outfitColor: 'Red',
        bestFriend: 'Maui'
    },

    {
        id: 5,
        name: 'Elsa',
        movie: 'Frozen',
        age: 21,
        outfitColor: 'Blue',
        bestFriend: 'Anna'
    },

    {
        id: 6,
        name: 'Sofia',
        movie: 'Sofia the First',
        age: 8,
        outfitColor: 'Purple',
        bestFriend: 'Clover'
    }, 
    
    {
        id: 7,
        name: 'Amber',
        movie: 'Sofia the First',
        age: 10,
        outfitColor: 'Yellow',
        bestFriend: 'Princess Hildegard'
    },

])

res.status(200).redirect('/princesses');
} catch (err) {
res.status(400).send(err);
}
});




// Route to get all Disney Princes
//I -Index-GET-READ-display a list of elements

router.get('/', async (req, res) =>{
    console.log("princess")
try{
const foundPrincesses = await Princess.find({});
res.status(200).render('princesses/Index', { princesses : foundPrincesses})
//res.status(200).send(foundPrincesses);///////check this line in all controllers b4 running
///check this 2 b4 running Christina helped////


} catch (err) {
res.status(400).send(err);
}
})

//N - NEW -GET -allows user to input a new item in the list

router.get('/new', (req, res) => {
res.render('princesses/New');
})

// D- DELETE -it ll delete item permanantly

router.delete('/:id', async(req, res) => {
try{
const deletedPrincess = await Princess.findByIdAndDelete(req.params.id);
console.log(deletedPrincess);
res.status(200).redirect('/princesses');
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
    const updatedPrincess = await Princess.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
    );
        console.log(updatedPrincess);
    res.redirect(`/princesses/${req.params.id}`);
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
const createdPrincess = await Princess.create(req.body);
res.status(200).redirect('/princesses');
} catch (err) {
    res.status(400).send(err);
}
})

////E- EDIT -GET-update an existing entry in the database

router.get("/:id/edit", async (req, res) => {
try {
const foundPrincess = await Princess.findById (req.params.id);
res.status(200).render('princesses/Edit', {princess: foundPrincess});
}  catch (err) {
res.status(400).send(err);
}
})

//////S-SHOW - GET-show route displays details of an individual Prince

// Route to get details of a specific Disney Prince by ID
router.get('/:id', async (req, res) => {
try {
const foundPrincess = await Princess.findById(req.params.id);
res.render('princesses/Show', { princess: foundPrincess});
} catch (err) {
res.status(400).send(err);
}

});

export default router;



