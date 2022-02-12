# Note Taker 

## Description

This note-taking application enables a user to write and save notes to keep organized and on-task. 

You may view the deployed application [clicking this link](https://tresha-gaye.github.io/note-taker/).

**Technologies**  

The application was created by Node JS and the following NPM packages: `Express` and `Uniqid`. The application uses a db.json file on the back end that stores and retrieves notes using the `fs` module.

**Criteria and Accomplishment**

- When the user goes to the Note Taker app, and clicks on the Notes page, s/he will see existing notes on the left-hand column and can enter a new note title and text using the field on the right-hand column. 
- When the user enters a new note, a `Save` icon (the 'disc' image) appears in the navigation at the top of the page, which saves the newly entered note when it is clicked. The new note is then added to the list of existing notes on the left. 
- When the user clicks on an existing note in the list in the left-hand column, that note appears in the right-hand column
- When the user clicks on the `Write` icon (the '+' symbol) icon in the navigation at the top of the page, then the empty fields reappear and the user can enter a new note title and note text in the right-hand column.

**Below are a screenshots of the app showing the functionality:**

![Creating a new note](.public/assets/images/noptepage1.jpg)  



Getting Started


The following HTML routes should be created:

GET /notes should return the notes.html file.

GET * should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

** Challenges **
You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.



## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Credits

**The following resources were used to complete this project:**
1. UCONN Coding Bootcamp's modules on Javascript and Node JS
2. README Guide [How to create a Professional README](./readme-guide.md)
3. [NodeJs](https://nodejs.org/api/modules.html) Documentation 
4. [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.0) Documentation 

## License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)



