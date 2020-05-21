const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('./models');

// git merge test! :)

let MONGODB_URI = process.env.NODE_ENV
  ? process.env.MONGODB_URI
  : "mongodb://localhost/seenit_db";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ROUTES - /api
// =============================================================
router.get('/', (req, res) => {
  res.end('hi');
});

router.get('/all-posts', (req, res) => {
  db.Post
    .find({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch((err) => {
      // res.status(400).end('bad things');
      res.status(400).json({
        "error": err,
        "message": err.message
      });
    })
});



router.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  db.Post
    .findOne({_id: postId})
    .populate(['postedBy', 'onCommunity'])
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      // res.status(400).end('bad things');
      console.log(err);
      res.status(418).json({
        status: 418,
        message: "arent you late for something?"
      });
    });
});

// POST REQUESTS
// =============================================================
router.post('/communities', (req, res) => {
  const commData = req.body;
  console.log(commData);

  db.Community
    .create(commData)
    .then((result) => {
      console.log(result);
      res.status(200).end();
    })
    .catch(err => {
      console.log(err.message);
      res.status(418).json({ status: 418, message: "arent you late for something?"});
    });
});

router.post('/posts', (req, res) => {
  const postData = req.body;
  console.log(postData);

  db.Post
    .create(postData)
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(err.message);
      res.status(418).json({ status: 418, message: "arent you late for something?"});
    });
});

router.post('/users', (req, res) => {
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
    });
});

app.post("/sendpostinfo", function (req, res) {
  console.log(req.body);
  res.end();
});


module.exports = router;