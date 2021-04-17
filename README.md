# Express-Note-Taker
Note Taker is an app that can be used to write and save notes.  This application uses an Express.js back end and will save and retrieve note data from a JSON file.  
Heroku Deployment [link]

The application has a `db.json` file on the back end that is used to store and retrieve notes using the `fs` module.

The following HTML routes were added to the starter code:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes were created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

## Description
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column



