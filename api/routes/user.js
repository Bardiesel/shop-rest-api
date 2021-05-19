const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.find({ email: email }).then((user) => {
    if (user.length >= 1) {
      return res.status(409).json({
        msg: "User Exist",
      });
    } else {
      bcrypt.hash(password, 12, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        } else {
          const user = new User({
            email: email,
            password: hash,
          });
          user
            .save()
            .then((result) => {
              console.log(result);
              res.status(200).json({
                msg: "User Created",
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err,
              });
            });
        }
      });
    }
  });
});

module.exports = router;
