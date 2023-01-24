// STEP 1: Require the express module. (also install using CLI)
const express = require("express");

// STEP 2: Require the body-parser module  (also install using CLI)
const bodyParser = require("body-parser");

// STEP 3: Require the https module.
const https = require("https");

// STEP 4: Create a constant called app and set it equal to the express() method.
const app = express();

// STEP 5: Use the app.set() method to set the app's view engine to ejs.
app.set('view engine', 'ejs');

// STEP 6: Run the server on port 3000
const port = 3000;

// STEP 7: Use app.listen() and console.log() to check if server is running on given port.
app.listen(port, function () {
  console.log("Server is running on port " + port + ".");
});

// STEP 8: Create a GET request on the homepage route
app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  // if today is Saturday (6) or today is  Sunday (0)
  if (currentDay === 6 || currentDay === 0) {
    // then print the message "Yay, it's the weekend!"
    res.send("<h1>Yay, it's the weekend!</h1>");
  } else {
    // otherwise, "Boo, it's the weekday. I have to work!"
    res.send("<h1>Boo, it's the weekday. I have to work!</h1>");
  }
});
