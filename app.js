// STEP 1: Require the express module. (also install using CLI)
const express = require("express");

// STEP 2: Require the body-parser module  (also install using CLI)
const bodyParser = require("body-parser");

// STEP 3: Require the https module.
const https = require("https");

// Require the date module we created (this is a local module so use __dirname)
const date = require(__dirname + "/date.js");

// STEP 4: Create a constant called app and set it equal to the express() method.
const app = express();

// STEP 11: Create a variable called news and set it equal to an empty array
// each time we get a new post request, and a new variable is created called item, then
// we can append that item to our array called items.
// you can push items into an array, you can use the const for declaring the variable
const items = [];

// Step 14:
const workItems = [];
// STEP 5: Use the app.set() method to set the app's view engine to ejs.
app.set("view engine", "ejs");

// STEP 6: Use the app.use() method to use the body-parser module and set urlencoded to the true setting.
app.use(bodyParser.urlencoded({ extended: true }));

// STEP 12: Use the app.use() method and express.static() methods to serve static files (CSS style sheet) in Express.
app.use(express.static("public"));

// STEP 7: Run the server on port 3000
const port = 3000;

// STEP 8: Use app.listen() and console.log() to check if server is running on given port.
app.listen(port, function () {
  console.log("Server is running on port " + port + ".");
});

// STEP 9: Create a GET request on the homepage route
app.get("/", function (req, res) {
  // create a variable called day and set it equal to a function call for date() that is bound to the const date
  // to activate getDate() function
  const day = date.getDate();

  //render our list.ejs passing in two variables: one called kindOfDay set to equal day and another
  // called newListItems set to equal to the items array.
  res.render("list", { listTitle: day, newListItems: items });
});

// STEP 10: Handle the post request to the homepage route
app.post("/", function (req, res) {
  // When a post request is triggered, save the value of newItem (input that user provided) to a
  // variable called item
  const item = req.body.newItem;

  //
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    // redirect to the homepage route which then sends you to app.get for the
    // homepage route and it will res.render the list template passing in both the kindOfDay as well as the newListItem
    // the object we want to push is the new item
    items.push(item);
    res.redirect("/");
  }
});

// Step 13: set a GET request for the work page
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

// STEP 15: set a GET request for the about page
app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/deleteItem", function (req, res){
  const item = req.body.newItem;
  if(req.body.list === "Work"){
      workItems.splice(workItems.indexOf(item), 1);
      res.redirect("/work");
  }else{
      items.splice(items.indexOf(item), 1);
      res.redirect("/");
  }
});