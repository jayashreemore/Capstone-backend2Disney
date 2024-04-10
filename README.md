# DisneyMovieCharacters-SBA319

# Disney Movies Project

This project is a web application for managing Disney movies, princesses, princes, and users.

## Description

The Disney Movies Project is a web application built with Node.js, Express.js, MongoDB, and JSX View Engine. It allows users to perform CRUD operations on Disney movies, princesses, princes, and users.

## Features

- Manage Disney movies
- Manage Disney princesses
- Manage Disney princes
- Manage users

## Installation

1. Clone the repository:

2. Install dependencies:


3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

PORT=5050
MONGO_URI=your_mongodb_connection_string


## Usage

Start the server:

## Routes

The following routes are available in the Disney Movies Project:

- **Movies Routes**:
  - `GET /movies`: Retrieves all movies.
  - `GET /movies/:id`: Retrieves a specific movie by ID.
  - `POST /movies`: Creates a new movie.
  - `PUT /movies/:id`: Updates an existing movie.
  - `DELETE /movies/:id`: Deletes a movie by ID.
{
                id:1,
                name: 'Cindrella',
                prince :'Prince Charming',
                princess: 'Cindrella',
                story: 'Cinderella is about a kind-hearted young woman who, with the help of her fairy godmother, attends a royal ball and captures the heart of Prince Charming. Despite facing hardships, she ultimately finds her happily ever after when the prince finds her using a glass slipper she leaves behind.',
                readyToWatch: 'true',  
            },

- **Princesses Routes**:
  - `GET /princesses`: Retrieves all princesses.
  - `GET /princesses/:id`: Retrieves a specific princess by ID.
  - `POST /princesses`: Creates a new princess.
  - `PUT /princesses/:id`: Updates an existing princess.
  - `DELETE /princesses/:id`: Deletes a princess by ID.

  {
        id: 1,
        name: 'Cinderella',
        movie: 'Cinderella',
        age: 20,
        outfitColor: 'Blue',
        bestFriend: 'Fairy Godmother'
    },

- **Princes Routes**:

  - `GET /princes`: Retrieves all princes.
  - `GET /princes/:id`: Retrieves a specific prince by ID.
  - `POST /princes`: Creates a new prince.
  - `PUT /princes/:id`: Updates an existing prince.
  - `DELETE /princes/:id`: Deletes a prince by ID.

  
                { 
                id: 1,
                name: 'Prince Charming',
                movie: 'Cinderella',
                age: 22,
                outfitColor: 'White',
                bestFriend: 'Mice and Birds'
                }
          

- **Users Routes**:
  - `GET /users`: Retrieves all users.
  - `GET /users/:id`: Retrieves a specific user by ID.
  - `POST /users`: Creates a new user.
  - `PUT /users/:id`: Updates an existing user.
  - `DELETE /users/:id`: Deletes a user by ID.


            {
                name: "Pappu Matre",
                email: "pappu.jaan@gmail.com",
                Phone: 614829999
            },