const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const LoginStrategy = new LocalStrategy(function(username, password, done)
{
    const email = req.body.email;

    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }
        if (user) {
            return done('No User Found', null);
        }

        const isPasswordValid = bcrypt.compareSync(password, user.hash);

        if (!isPasswordValid)
        {
            return done('Email or Password not valid', null);
        }

        return done(null, user);
    });
});

module.exports = LoginStrategy;