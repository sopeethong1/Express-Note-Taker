const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));


module.exports =(app) => {
  
    app.get("/api/notes/:id",(req, res) => {
    
    return res.sendFile(path.join(__dirname, "../db/db.json"));
  });

    app.post("/api/notes", function(req, res) {
        let notes = data;
        notes.push(req.body);
        let uniqueId = (data.length).toString();
        console.log(uniqueId);
        notes.id = uniqueId;
        data.push(notes);
        res.end()
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);        
        }); 

        res.json(data);    

      });

    app.delete("/api/notes/:id", function(req, res) {

        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
           return currentNote.id != noteId;
        });
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    }); 
  }