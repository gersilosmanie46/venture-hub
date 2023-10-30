/* 
   Filename: ComplexWebApp.js
   Description: A complex web application which utilizes various JavaScript concepts and libraries.
*/

// Importing external libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initializing express application
const app = express();

// Setting up application middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connecting to MongoDB database
mongoose.connect("mongodb://localhost/myapp", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB!");
});

// Creating MongoDB Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model("User", userSchema);

// Creating API endpoints
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Defining application routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Starting the server
app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
