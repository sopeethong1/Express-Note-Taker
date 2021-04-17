// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
//Using Router middleware

const path = require("path");

module.exports = (app) => {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
    console.log("GET request for /notes was successful.");
  });

  app.get("/api/notes", function (req, res) {
    console.log("GET request for /api/notes was successful.");
    return res.sendFile(path.json(__dirname, "db/db.json"));
  });

 
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
    console.log("GET request for home page was successful.");
  });
};
