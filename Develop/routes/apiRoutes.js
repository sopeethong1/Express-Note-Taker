
const path = require("path");
const fs = require("fs");

let notesData = [];

module.exports = (app) => {
app.get("/api/notes", function(err, res) {
  try {
    notesData = fs.readFileSync("db/db.json", "utf8");
    notesData = JSON.parse(notesData);

  } catch (err) {
    console.log(err);
  }

  console.log("GET request for /api/notes was successful.");
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
        return note.id != req.params.id;
      });
   
      notesData = JSON.stringify(notesData);
    
      fs.writeFile("db/db.json", notesData, "utf8", function(err) {
    
        if (err) throw err;
      });
      console.log("DELETE request for /api/notes/:id was successful.");

      res.send(JSON.parse(notesData));
  
     
    } catch (err) {
      throw err;
    }
  });
};
  