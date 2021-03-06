// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
//Using Router middleware

const path = require("path");

module.exports = (app) => {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, './public.notes.html'));
  });
 
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });
}

