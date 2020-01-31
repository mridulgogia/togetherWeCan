const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  if (!req.body.email) {
    return res.status(404).json({ signupEmailError: "Email is required" });
  }
  if (!req.body.password) {
    return res
      .status(404)
      .json({ signupPasswordError: "Password is required" });
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ signupError: "Email already exists" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            res.json(user);
          });
        });
      });
    }
  });
};

exports.login = (req, res) => {
  if (!req.body.email)
    return res.status(404).json({ loginEmailError: "Email is required" });
  if (!req.body.password)
    return res.status(404).json({ loginPasswordError: "Password is required" });
  const password = req.body.password;
  const email = req.body.email.trim().toLowerCase();
  User.findOne({ email })
    .then(user => {
      if (!user) {
        throw err;
      }
      bcrypt.compare(password, user.password).then(isEqual => {
        if (isEqual) {
          const payload = {
            id: user.id,
            username: user.username
          };
          jwt.sign(
            payload,
            "RANDOMSTRING",
            { expiresIn: 86400 },
            (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          );
        } else {
          errors.password = "Password Incorrect";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(() => {
      return res.status(404).json({ emailNotFound: "Email Not Found" });
    });

  //   User.findOne({ email: req.body.email })
  //     .then(user => {
  //       if (!user) {
  //         return res.status(401).json({
  //           error: new error("User not found")
  //         });
  //       }
  //       bcrypt
  //         .compare(req.body.password, user.password)
  //         .then(valid => {
  //           if (!valid) {
  //             return res.status(401).json({
  //               error: new error("Incorrect Password")
  //             });
  //           }
  //           const payload = {
  //             id: user.id,
  //             username: user.username
  //           };
  //           jwt.sign(
  //             payload,
  //             keys.secretKey,
  //             { expiresIn: 86400 },
  //             (err, token) => {
  //               res.json({
  //                 success: true,
  //                 token: `Bearer ${token}`
  //               });
  //             }
  //           );
  //         })
  //         .catch(error => {
  //           res.status(500).json({ error });
  //         });
  //     })
  //     .catch(error => {
  //       res.status(500).json({ error });
  //     });
};
