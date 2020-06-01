const passport = require("passport");

const SignupStrategy = require("./SignupStrategy");
const LoginStrategy = require("./LoginStrategy");
// This is where we would put the google strategy or any other strategies if we decided to use it.

passport.use("local-signup", SignupStrategy);
passport.use("local-login", LoginStrategy);

module.exports = passport;
