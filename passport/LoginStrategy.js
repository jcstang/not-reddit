const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const LoginStrategy = new LocalStrategy(function (username, password, done) {
  // const email = req.body.email;

  User.findOne({ username: username })
    .lean()
    .exec((err, user) => {
      if (err) {
        return done(err, null);
      }
      if (!user) {
        return done("No User Found", null);
      }

      const userPassword = user.password;
      const isPasswordValid = bcrypt.compareSync(password, userPassword);
      if (!isPasswordValid) {
        return done("Email or Password not valid", null);
      }

      return done(null, user);
    });
});

module.exports = LoginStrategy;
