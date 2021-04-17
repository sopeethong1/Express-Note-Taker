// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const path = require("path");


// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using built-in middleware to serve static files
app.use(express.static("public"));

require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);

//setting directory absolute path to index.html
app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, '/public/index.html'));
  });
      // Starts the server to begin listening
      
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));