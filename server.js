// START of backend - server.js

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const apiRouter = require('./api-routes');

const app = express();

// == MIDDLEWARE
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// == API ROUTES
// =============================================================
app.use('/api', apiRouter);

// app.post("/api/sendpostinfo", function (req, res) {
//   console.log(req.body);
//   res.end();
// });

// REACT - Send every other request to the React app
// =============================================================
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
