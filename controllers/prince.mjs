import express from 'express';

const router = express.Router();

// Sample data for Disney Princes
const princes = [
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
        age: 'Eternal (Semi-god)',
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
    },

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

    // Add more prince data as needed
];

// Route to get all Disney Princes
router.get('/', (req, res) => {
    res.json(princes);
});

// Route to get details of a specific Disney Prince by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const prince = princes.find(p => p.id === parseInt(id));
    if (prince) {
        res.json(prince);
    } else {
        res.status(404).json({ message: 'Prince not found' });
    }
});

export default router;
