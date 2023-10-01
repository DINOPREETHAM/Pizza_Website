const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Blog = require("./models/blog");
const app = express();
const cors = require("cors");

const dbURI =
  "mongodb+srv://Dinopreetham:megacharizard@express.v7yn8c3.mongodb.net/website1?retryWrites=true&w=majority"; //change code here
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log("connected to db");
  });

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

app.post("/submit", (req, res) => {
  //var myname = "preetham";
  const newBlog = new Blog(req.body);
  //console.log("name posted");
  newBlog.save().then((result) => {
    //res.redirect("/Contact");
    console.log("form submitted successfully");
  });
});

app.use((req, res) => {
  //this runs because there is no info to display on server.
  // res.redirect("/");
  res.send("ERROR");
});
