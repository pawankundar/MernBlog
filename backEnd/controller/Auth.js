const User = require("../models/User");

exports.signUp = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).json({
        message: err,
      });
    }
    res.json(user);
  });
};
