const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const key = "RANDOMSTRING";
const user = require("./models/user");
const options = {};
options.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = key;

module.exports = passport => {
  passport.use(
    new jwtStrategy(options, (jwtPayload, done) => {
      user
        .findById(jwtPayload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {
          console.log(err);
        });
    })
  );
};
