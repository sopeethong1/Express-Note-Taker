const express = require("express");

const fs = require("fs");

let notesData = [];

module.exports = (app) => {

app.get("/api/notes", function(err, res) {
  try {
    notesData = fs.readFileSync("db/db.json", "utf8");
    notesData = JSON.parse(notesData);
    if (err) throw (err); 
    return res.sendFile(path.json(__dirname, "db/db.json"));
    

  } catch (err) {
    console.log(err);
  }
  res.json(notesData);
});

app.post("/api/notes", function(req, res) {
  try {

    notesData = fs.readFileSync("db/db.json", "utf8");
    console.log(notesData);
    notesData = JSON.parse(notesData);
    req.body.id = notesData.length;
    notesData.push(req.body); 
    notesData = JSON.stringify(notesData);
    fs.writeFile("db/db.json", notesData, "utf8", function(err) {
      if (err) throw err;
    });

    res.json(JSON.parse(notesData));
    
    } catch (err) {
      throw err;
    }
  });

  app.delete("/api/notes/:id", function(req, res) {
    try {
      notesData = fs.readFileSync("db/db.json", "utf8");
      notesData = JSON.parse(notesData);
      notesData = notesData.filter(function(note) {
        return noteData.id != req.params.id;
      });
   
      notesData = JSON.stringify(notesData);
    
      fs.writeFile("db/db.json", notesData, "utf8", function(err) {
    
        if (err) throw err;
      });
  
      res.send(JSON.parse(notesData));
  
     
    } catch (err) {
      throw err;
    }
  });
};
  