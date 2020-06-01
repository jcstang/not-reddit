const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../models");
const chalk = require("chalk");
const passport = require("../passport");

// MONGO setup ===
// =============================================================
let MONGODB_URI = process.env.NODE_ENV
  ? process.env.MONGODB_URI
  : "mongodb://localhost/seenit_db";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ROUTES - /api
// =============================================================
router.get("/", (req, res) => {
  res.end("we should never come here.");
});

router.get("/all-posts", (req, res) => {
  db.Post.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
        message: err.message,
      });
    });
});

router.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.Post.findOne({ _id: postId })
    .populate(["postedBy", "onCommunity"])
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(418).json({
        status: 418,
        error: err,
        message: `arent you late for something? ${err.message}`,
      });
    });
});

router.get("/community-posts/:id", (req, res) => {
  const communityId = req.params.id;
  // TODO: use community id to filter the posts that come back.

  res.end("/community-posts/:id");
});

router.get("/all-communities", (req, res) => {
  // TODO: get a list of the communities that are available

  res.end("/all-communities");
});

// TODO: Do we need get user routes???????

// POST REQUESTS
// =============================================================
router.post("/communities", (req, res) => {
  const commData = req.body;
  console.log(commData);

  db.Community.create(commData)
    .then((result) => {
      console.log(result);
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(418)
        .json({ status: 418, message: "arent you late for something?" });
    });
});

router.post("/post", (req, res) => {
  const postData = req.body;
  console.log(postData);

  db.Post.create(postData)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(418)
        .json({ status: 418, message: "arent you late for something?" });
    });
});

router.post("/users", (req, res) => {
  const userData = req.body;
  console.log(userData);

  db.User.create(userData)
    .then((whatHappened) => {
      res.status(200).json({ status: 200, data: whatHappened });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(418)
        .json({ status: 418, message: "arent you late for something?" });
    });
});

router.post("/sign-up", (req, res, next) => {
  passport.authenticate("local-signup", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Oops, something happened.",
      });
    }
    return res.json(user);
  })(req, res, next);
});

router.post("/log-in", (req, res, next) => {
  passport.authenticate("local-login", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Oops, something happened.",
      });
    }
    return res.json(user);
  })(req, res, next);
});

module.exports = router;
