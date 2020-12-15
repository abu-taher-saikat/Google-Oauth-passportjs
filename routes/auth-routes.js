const { request } = require("express");
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Auth login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

// Auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  // res.send("loggin out");
  req.logOut();
  res.redirect("/");
});

// Auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send("You reached the callback URI");
  // res.send(req.user);
  res.redirect("/profile");
});
module.exports = router;
