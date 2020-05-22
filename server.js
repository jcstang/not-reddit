
//***************************************************************************
//  server.js
//  START of the api backend
//***************************************************************************
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const apiRouter = require('./routes/api-routes');
const seedTheData = require('./routes/seed-funcs').seedTheData;

const app = express();

// == MIDDLEWARE
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  // seed data to the mongo db - IF NOT production
  seedTheData();
}

// == API ROUTES
// =============================================================
app.use('/api', apiRouter);


// REACT - Send every other request to the React app
// =============================================================
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// LISTEN
// =============================================================
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!\n`);
});
