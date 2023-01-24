// STEP 1: Require the express module. (also install using CLI)
const express = require("express");

// STEP 2: Require the body-parser module  (also install using CLI)
const bodyParser = require("body-parser");

// STEP 3: Require the https module
const https = require("https");

// STEP 4: Create an express app
const app = express();

// STEP 5: Run the server on port 3000
const port = 3000;

// STEP 6: Use app.listen() and console.log() to check if server is running on given port.
app.listen(port, function () {
  // create a variable called today and set it equal to new Date();
  var today = new Date();
  // use the getDay() method.
  // If today is Saturday (6) or if today is Sunday (0),
  if (today.getDay() === 6 || today.getDay() === 0) {
    // then send a message saying "Yay is the weekend"
    res.send("Yay, it's the weekend!");
    // otherwise, send a message saying "Boo! It's a weekday, I have to work!"
  } else {
    res.send("Boo! It's a weekday, I have to work!");
  }
});

// STEP 7: Create a GET route on the home route.
app.get("/", function (req, res) {
  res.send("Server is running on port " + port + ".");
});
