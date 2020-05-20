const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: String,
    body: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateCreated: Date,
    onCommunity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
    },
    //comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
});

let Post = mongoose.model('posts', PostSchema);

// ./index.js is handling the exports
module.exports = Post;



// var postSchema = new Schema({
//     name: String,
//     postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//     dateCreated: Date,
//     comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
// });

// var Post = mongoose.model('Post', postSchema);

// Post.findOne({_id: 123})
// .populate('postedBy')
// .exec(function(err, post) {
//     // do stuff with post
// });

// /* POSTS */
// /* 1 */
// {
//   "_id" : "27gh2",
//   "title" : "Hello World!",
//   "body" : "This is where I write things.",
//   "user_id" : "5ec2c3bd74eb1c1a41714151",
//   "community_id" : "5ec2c29d74eb1c1a41714130"
// }

// /* 2 */
// {
//   "_id" : ObjectId("5ec2cb0174eb1c1a4171422b"),
//   "title" : "Hello World!",
//   "body" : "my first dnd post",
//   "user_id" : "5ec2c3bd74eb1c1a41714151",
//   "community_id" : "5ec2c31e74eb1c1a4171413b"
// }