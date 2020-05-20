const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
    googleKey: String,
    title: String,
});

const Community = mongoose.model('communities', CommunitySchema);

// ./index.js is handling the exports
// module.exports = Book;



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