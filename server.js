const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
//add code to require the express package
const express = require("express");
// create a route that the front end can request data from

const notes = require("./db/db");

// set an environment variable, use this port, if se, or default to PORT 80
const PORT = process.env.PORT || 3001;

// add code to instantiate the server
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/api/notes', (req, res) => {
    // GET method requires 2 args: 1. string descriibing route client wants to fetch from & 2. callback function to execute everytim route is accessed with GET request
    let results = notes;
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // }
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

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.send(req.body);

});
    

app.delete('/api/notes/:id', (req, res) => {
    req.params;
    console.log(req.params);
    // use for loop to search which index this note id is in, if does, save index in a variable then delete it
    // use the splice, then rewrite in db.json (fs.writefilesync)
    // look into indexof- a method taht we pass a value in and it returns the index or position of where the element is
    // look into using filter to identify id to delete
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
    
})


  
// chain the listen methods to the server
app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
});


// bonus
// set up skeleton (app.delete + url in bonus, call back with req,res)
// DELETE /api/notes/:id put id in the url as a parameter
// console.log req.params, use property called id, which is the value of the id to delete