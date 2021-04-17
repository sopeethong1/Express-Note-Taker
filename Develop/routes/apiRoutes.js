const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json");

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    let numId = db.length;
     const body = req.body;
     Object.assign(body, {id: numId});

        db.push(body);
   
        dbString = JSON.stringify(db);

        fs.writeFile('db/db.json', 'dbString', function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
      })}