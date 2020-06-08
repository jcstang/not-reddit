const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: String,
  body: String,
  numberOfLikes: {
    type: Number,
    default: 0,
  },
  numberOfDislikes: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: [true, "Please add a image url."],
  },
  postedBy: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'users'
  },
  imagethumbnail: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  onCommunity: {
    type: String,
    default: "all",
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'communities'
  },
  //comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
});

let Post = mongoose.model("posts", PostSchema);

// ./index.js is handling the exports
module.exports = Post;
