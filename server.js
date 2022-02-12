//add code to require the packages
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const express = require("express");

// create global variable to update the notes database
const notes = require("./db/db");

const req = require('express/lib/request');

// set an environment variable, use this port, if se, or default to PORT 80
const PORT = process.env.PORT || 3001;

// add code to instantiate the server
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// create routes that the front end can request data from
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/api/notes', (req, res) => {
    let results = notes;
    
    res.json(results);
});

app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be 
    console.log(req.body);
  
    // set id based on what the next index of the array will be
    req.body.id = uniqid();
    console.log('after the id', req.body);
    
    notes.push(req.body);
    console.log(notes);

    // add the newly created note to the notes array
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.send(req.body);

});

// create route to delete- not working as not updating the front end
app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    console.log(noteId);
    
    const updatedNotes = notes.filter(note => note.id !== noteId);
    console.log(notes);
    console.log(updatedNotes);
    
    fs.writeFileSync('./db/db.json', JSON.stringify(updatedNotes), 'utf8'); 
    res.send(updatedNotes);
});

// create the default route back to home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
    
})
  
// chain the listen methods to the server
app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
});


