import express from 'express';

const router = express.Router();

// Sample data for Disney Princesses
const princesses = [
    {
        id: 1,
        name: 'Cinderella',
        movie: 'Cinderella',
        age: 20,
        dressColor: 'Blue',
        bestFriend: 'Fairy Godmother'
    },
    {
        id: 2,
        name: 'Aurora',
        movie: 'Sleeping Beauty',
        age: 16,
        dressColor: 'Pink',
        bestFriend: 'Fairies'
    },

    {
        id: 3,
        name: 'Anna',
        movie: 'Frozen',
        age: 18,
        dressColor: 'Green',
        bestFriend: 'Elsa'
    }, 

    {
        id: 4,
        name: 'Moana',
        movie: 'Moana',
        age: 16,
        dressColor: 'Red',
        bestFriend: 'Maui'
    },

    {
        id: 5,
        name: 'Elsa',
        movie: 'Frozen',
        age: 21,
        dressColor: 'Blue',
        bestFriend: 'Anna'
    },

    {
        id: 6,
        name: 'Sofia',
        movie: 'Sofia the First',
        age: 8,
        dressColor: 'Purple',
        bestFriend: 'Clover'
    }, 
    
    {
        id: 7,
        name: 'Amber',
        movie: 'Sofia the First',
        age: 10,
        dressColor: 'Yellow',
        bestFriend: 'Princess Hildegard'
    },
    // Add more princess data as needed
];

// Route to get all Disney Princesses
router.get('/', (req, res) => {
    res.json(princesses);
});

// Route to get details of a specific Disney Princess by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const princess = princesses.find(p => p.id === parseInt(id));
    if (princess) {
        res.json(princess);
    } else {
        res.status(404).json({ message: 'Princess not found' });
    }
});

export default router;
