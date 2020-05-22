const express = require('express');
const mongoose = require('mongoose');
const db = require('../models');

// MONGO setup ===
// =============================================================
let MONGODB_URI = process.env.NODE_ENV
? process.env.MONGODB_URI
: "mongodb://localhost/seenit_db";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let userId = null;
let commId = null;
let userData = {
  "username": "seed_user",
  "displayName": "beepinator",
  "email": "beepinator@gmail.com",
  "password": "password123",
  "joinDate": "2012-04-23T18:25:43.511Z"
};
let communityData = {
  "name": "all",
  "link": "/s/all"
};
let listOfPosts = [
  {
    "title": "hello world, hello title!",
    "body": "this is the body to the post",
    "imageUrl": "https://source.unsplash.com/sfL_QOnmy00/250x300",
    "postedBy": userId,
    "dateCreated": "2012-04-23T18:25:43.511Z",
    "onCommunity": commId
  },
  {
    "title": "hello world, hello title!",
    "body": "this is the body to the post",
    "imageUrl": "https://source.unsplash.com/sfL_QOnmy00/250x300",
    "postedBy": userId,
    "dateCreated": "2012-04-23T18:25:43.511Z",
    "onCommunity": commId
  },
  {
    "title": "hello world, hello title!",
    "body": "this is the body to the post",
    "imageUrl": "https://source.unsplash.com/sfL_QOnmy00/250x300",
    "postedBy": userId,
    "dateCreated": "2012-04-23T18:25:43.511Z",
    "onCommunity": commId
  },
  {
    "title": "hello world, hello title!",
    "body": "this is the body to the post",
    "imageUrl": "https://source.unsplash.com/sfL_QOnmy00/250x300",
    "postedBy": userId,
    "dateCreated": "2012-04-23T18:25:43.511Z",
    "onCommunity": commId
  },
  {
    "title": "hello world, hello title!",
    "body": "this is the body to the post",
    "imageUrl": "https://source.unsplash.com/sfL_QOnmy00/250x300",
    "postedBy": userId,
    "dateCreated": "2012-04-23T18:25:43.511Z",
    "onCommunity": commId
  },
  {
    "title": "hello world, hello title!",
    "body": "this is the body to the post",
    "imageUrl": "https://source.unsplash.com/sfL_QOnmy00/250x300",
    "postedBy": userId,
    "dateCreated": "2012-04-23T18:25:43.511Z",
    "onCommunity": commId
  },
  {
    "title": "hello world, hello title!",
    "body": "this is the body to the post",
    "imageUrl": "https://source.unsplash.com/sfL_QOnmy00/250x300",
    "postedBy": userId,
    "dateCreated": "2012-04-23T18:25:43.511Z",
    "onCommunity": commId
  },

];


function createUser(data) {
  return db.User.create(data);
}

function createCommunity(data) {
  return db.Community.create(data);
}

function createPost(data) {
  return db.Post.create(data);
}





router.post('/seed', (req, res) => {
  console.log('do I make it here?');

  // db.User.createCollection().then(collection => console.log('user collection created'));
  // db.Community.createCollection().then(collection => console.log('community collection created'));
  // db.Post.createCollection().then(collection => console.log('post collection created'));

  // create user and get id
  // =============================================================


  db.User
    .create(userData)
    .then(uData => {

    })

  db.User
    .create(userData)
    .then((data) => {
      userId = data._id
      // res.status(200).json({ status: 200, data: data });
    })
    .catch(err => {
      // console.log(err.message);
      res.status(418).json({ status: 418, message: "arent you late for something? user"});
    });


  //  create community and get id
  // =============================================================

  db.Community.create(communityData)
  .then( data => {
    commId = data._id;
    // res.status(200).json({ status: 200, data: data });
  })
  .catch(err => {
    res.status(418).json({ status: 418, message: "arent you late for something? community"});
  });


  db.Post.insertMany(listOfPosts, function(error, docs) {
    if(error) {
      res.status(418).json({ err: error });
    }
    res.end('hi');
  });

  // db.Post
  //   .insertMany(listOfPosts)
  //   .then(data => {
  //     if (userId !== null && commId !== null) {
  //       res.status(200).json({ status: 200, data: data });
  //     }
  //     res.end('hmmm something was null');
  //   })
  //   .catch(err => {
  //     res.status(418).json({ status: 418, message: "arent you late for something? post"});
  //   });

});