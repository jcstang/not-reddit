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



// /* COMMUNITIES */
// /* 1 */
// {
//   "_id" : ObjectId("5ec2c29d74eb1c1a41714130"),
//   "Name" : "all",
//   "link" : "/s/all"
// }

// /* 2 */
// {
//   "_id" : ObjectId("5ec2c31e74eb1c1a4171413b"),
//   "title" : "dnd",
//   "link" : "/s/dnd"
// }