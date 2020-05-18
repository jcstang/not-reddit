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


// /* USERS */
// /* 1 */
// {
//     "_id" : ObjectId("5ec2c3bd74eb1c1a41714151"),
//     "username" : "hello_me_hi",
//     "password" : "123"
// }