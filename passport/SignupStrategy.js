const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const SignupStrategy = new LocalStrategy({ passReqToCallback: true }, function (
  req,
  username,
  password,
  done
) {
  const email = req.body.email;

  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      if (err) {
        return done(err, null);
      }
      if (user) {
        return done("User already exists", null);
      }

      const encryptedPassword = bcrypt.hashSync(password, salt);
      let newUser = new User({
        email,
        username,
        password: encryptedPassword,
      });

      newUser.save((error, inserted) => {
        if (error) {
          return done(error, null);
        }
        delete inserted.password; //This may not work, TODO
        return done(null, inserted);
      });
    });
});

module.exports = SignupStrategy;
