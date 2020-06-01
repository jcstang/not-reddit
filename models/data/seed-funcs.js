const express = require("express");
const mongoose = require("mongoose");
const db = require("../../models");
const chalk = require("chalk");
const POST_SIZE = 10;

// == MONGO setup ===
// =============================================================
let MONGODB_URI = process.env.NODE_ENV
  ? process.env.MONGODB_URI
  : "mongodb://localhost/seenit_db";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seenitConnection = mongoose.connection;
seenitConnection.once("open", function () {
  console.log(chalk.bgBlue.white("mongoDB connected successfully."));
  // =====
  // commenting out this func to not drop db.
  //dropAllCollections();
});

const dropAllCollections = () => {
  seenitConnection.db.dropCollection("posts", (err, result) => {
    console.log(chalk.magenta("posts collection dropped"));
  });
  seenitConnection.db.dropCollection("communities", (err, result) => {
    console.log(chalk.magenta("communities collection dropped"));
  });
  seenitConnection.db.dropCollection("users", (err, result) => {
    console.log(chalk.magenta("users collection dropped"));
  });
};

// let userId = null;
// let commId = null;
let userData = {
  username: "seed_user",
  displayName: "beepinator",
  email: "beepinator@gmail.com",
  password: "password123",
};
let communityData = {
  name: "all",
  link: "/s/all",
};

function createUser(data) {
  return db.User.create(data);
}

function createCommunity(data) {
  return db.Community.create(data);
}

function createPost(data) {
  return db.Post.create(data);
}

function fillPostData(userId, commId) {
  return {
    title: "hello world, hello title!",
    body: "this is the body to the post",
    imageUrl: "https://source.unsplash.com/sfL_QOnmy00/250x300",
    postedBy: userId,
    // "onCommunity": commId
    onCommunity: "all",
  };
}

function seedTheData() {
  createUser(userData)
    .then((userResults) => {
      console.log(chalk.cyanBright("**** SEEDING DATA.... ******"));
      console.log(chalk.cyanBright("inserting a user..."));
      // userId = userResults._id;
      createCommunity(communityData).then((commResults) => {
        console.log(chalk.cyanBright("inserting a community..."));
        // commId = commResults._id;
        let postData = [];

        for (let i = 0; i < POST_SIZE; i++) {
          postData.push(fillPostData(userResults._id, commResults._id));
        }

        createPost(postData).then((postResults) => {
          console.log(chalk.cyanBright("inserting post data...."));
          console.log(chalk.green("*******************************"));
          console.log(chalk.green("** data has been seeded!!! ****"));
          console.log(chalk.green("*******************************\n\n"));
        });
      });
    })
    .catch((err) => {
      return false;
    });
}

module.exports = {
  seedTheData: seedTheData,
};
