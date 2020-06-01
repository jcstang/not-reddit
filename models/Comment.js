const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
  body: String,
  numberOfLikes: {
    type: Number,
    default: 0,
  },
  numberOfDislikes: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
  },
  onPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
});

let Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;
