const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('./models');


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
    .catch(() => {
      res.status(400).end('bad things');
    })
});

router.post('/communities', (req, res) => {
  const commData = req.body;
  console.log(commData);

  db.Community
    .create(commData)
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


module.exports = router;