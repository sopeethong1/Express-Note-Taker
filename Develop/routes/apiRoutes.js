const express = require("express");
const router = express.Router();
const fs = require("fs");
const db = require("../db/db.json");

router.get("/notes", (req, res) => {
  console.log(req.query);
  const noteData = fs.readFileSync("./db/db.json", "utf-8");
  res.json(JSON.parse(noteData));
});

router.post("/notes", (req, res) => {
  console.log(req.body);

  var noteData = fs.readFileSync("./db/db.json", "utf-8");

  console.log(noteData);
  var notesArray = JSON.parse(noteData);
  req.body.id = notesArray.length + 1;
  notesArray.push(req.body);
  notesArray = JSON.stringify(notesArray);
  fs.writeFileSync("./db/db.json", notesArray);
  res.json(true);
});

router.delete("/notes/:id", (req, res) => {
  console.log("req.params in delete route 1st, then .id 2nd");
  console.log(req.params);
  console.log(req.params.id);
  var noteData = fs.readFileSync("./db/db.json", "utf-8");
  var notesArray = JSON.parse(noteData);

  function filterOutById(note) {
    return note.id !== parseInt(req.params.id);
  }
  notesArray = notesArray.filter(filterOutById);

  notesArray = JSON.stringify(notesArray);
  console.log("Notes array logged below:");
  console.log(notesArray);
  fs.writeFileSync("./db/db.json", notesArray);
  res.json(true);
});

module.exports = router;
