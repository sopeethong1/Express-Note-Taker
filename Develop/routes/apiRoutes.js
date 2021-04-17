const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json");

// ROUTING

module.exports = (app) => {
 

  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    let numId = db.length;
    const body = req.body;
    Object.assign(body, { id: numId });

    db.push(body);

    dbString = JSON.stringify(db);

    fs.writeFile("db/db.json", "dbString", function (err) {
      if (err) throw err;
      console.log("Saved!");
    });

    app.delete("/api/notes/:id", function (req, res) {
      const notes = [];
      const id = req.params.id;
      notes = fs.readFileSync("./db/db.json", "utf8");
      notes = JSON.parse(notes);
      notes = notes.filter(function (note) {
        return note.id != id;
      });

      fs.writeFile("db/db.json", "notesString", function (err) {
        if (err) throw err;
        console.log("Saved!");
      });

      res.json(notes);
    });
  });
};
