const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');
const chalk = require('chalk');
//import { seedTheData } from './seed-funcs';

// MONGO setup ===
// =============================================================
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
  res.end('we should never come here.');
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
        error: err,
        message: `arent you late for something? ${err.message}`
      });
    });
});

router.get('/community-posts/:id', (req, res) => {
  const communityId = req.params.id;
  // TODO: use community id to filter the posts that come back.

  res.end('/community-posts/:id');
});

router.get('/all-communities', (req, res) => {
  // TODO: get a list of the communities that are available

  res.end('/all-communities');
});

// TODO: Do we need get user routes???????

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
    .then((whatHappened) => {
      // console.log(whatHappened);
      res.status(200).json({ status: 200, data: whatHappened });
    })
    .catch(err => {
      console.log(err.message);
      res.status(418).json({ status: 418, message: "arent you late for something?"});
    });
});


router.post('/seed', (req, res) => {
  console.log('do I make it here?');
  let userId = null;
  let commId = null;

  // db.User.createCollection().then(collection => console.log('user collection created'));
  // db.Community.createCollection().then(collection => console.log('community collection created'));
  // db.Post.createCollection().then(collection => console.log('post collection created'));

  // create user and get id
  // =============================================================
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

// app.post("/sendpostinfo", function (req, res) {
//   console.log(req.body);
//   res.end();
// });


module.exports = router;