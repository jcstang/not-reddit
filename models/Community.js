const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  name: String,
  link: String,
});

const Community = mongoose.model("communities", CommunitySchema);

module.exports = Community;
