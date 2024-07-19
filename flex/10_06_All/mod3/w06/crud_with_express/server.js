const express = require('express');
const app = express();
const port = 8080;

const db = require('./data/pets.json')

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.listen(port, () => console.log('Server is running on port: ', port));

// BROWSE - GET - /pets - User able to fetch all pet data
// READ - GET - /pets/:id - User able to fetch pet data by id
// ADD - POST - /pets - User able to add new pet data
// EDIT - POST - /pets/:id - User able to update pet data by id
// DELETE - POST - /pets/:id/delete - User able to delete pet data by id

app.get('/', (req,res) => {
  res.send('Welcome to Pet Shop')  ;
});

app.get('/pets', (req,res) => {
    res.render('browse', { pets: db});
});

app.get('/pets/:id', (req,res) => {
    const id = req.params.id;
    const pet = db.find(pet => pet.id == id);
    if (!pet) {
        return res.send('Pet not found');
    }
    res.render('read', { pet });

})

app.get('/edit/:id', (req,res) => {
    const id = req.params.id;
    const pet = db.find(pet => pet.id == id);
    if (!pet) {
        return res.send('Pet not found');
    }
    res.render('edit', { pet });
})

app.get('/add', (req,res) => {
    res.render('add');
})

app.post('/pets/:id', (req,res) => {
    const id = req.params.id;
    const pet = db.find(pet => pet.id == id);
    const { name, hairLength, breed, species, color} = req.body;
    pet.name = name;
    pet.hairLength = hairLength;
    pet.breed = breed;
    pet.species = species;
    pet.color = color;

    res.redirect('/pets/' + id);

})

app.post('/pets/', (req,res) => {
    const { name, hairLength, breed, species, color} = req.body;
    const pet = {
        id: db.length + 1,
        name,
        hairLength,
        breed,
        species,
        color
    };
    db.push(pet);

    res.redirect('/pets/' + pet.id);

})

app.post('/pets/:id/delete', (req,res) => {
    const id = req.params.id;
    const petIndex = db.findIndex(pet => pet.id === id);
    db.splice(petIndex, 1);
    res.redirect('/pets');
})