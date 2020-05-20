const express = require("express");
const path = require("path");
// const db = require('./models/User');
const PORT = process.env.PORT || 3001;
const app = express();


// TODO: need mongoose and models require here
const mongoose = require('mongoose');
const db = require('./models');
let MONGODB_URI = process.env.NODE_ENV
  ? process.env.MONGODB_URI
  : "mongodb://localhost/seenit_db";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// console.log(mongoose);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ******** API routes ********
// kinda like /r/all just get all posts
app.get('/s/all', (req, res) => {

});

app.get('/api/all-posts', (req, res) => {
  db.Post
    .find({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(400).end('bad things');
    })
});

app.post('/api/users', (req, res) => {
  const userData = req.body;
  console.log(userData);

  db.User
    .create(userData)
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(err.message);
      res.status(418).json({ status: 418, message: "arent you late for something?"});
    })
});

// TODO: find ref to something else. here is an example:
// Post.findOne({_id: 123})
// .populate('postedBy')
// .exec(function(err, post) {
//     // do stuff with post
// });


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});