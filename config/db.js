const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {

  let MONGODB_URI = process.env.NODE_ENV
    ? process.env.MONGODB_URI
    : "mongodb://localhost/seenit_db";

  try {
    // await mongoose.connect(db, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true
    // });
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    // exit process with failure
    process.exit(1);
  }
}

// MONGO setup ===
// =============================================================
// let MONGODB_URI = process.env.NODE_ENV
//   ? process.env.MONGODB_URI
//   : "mongodb://localhost/seenit_db";

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = connectDB;