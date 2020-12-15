const express = require("express");
const router = express.Router();

// auth check
const authCheck = (req, res, next) => {
  if (!req.user) {
    // if your is not logged in
    res.redirect("/auth/login");
  } else {
    // if logged in
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  //   res.send("you are logged in this is your profile" + req.user.username);
  res.render("profile", { user: req.user });
});

module.exports = router;
