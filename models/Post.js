const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    googleKey: String,
    title: String,
    authors: [String],
    description: String,
    imageUrl: String,
    bookUrl: String
});

const Book = mongoose.model('books', BookSchema);

module.exports = Book;

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