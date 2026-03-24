const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { isLoggedIn, savedRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

//Signup Routes
router
  .route("/signup")
  .get(userController.registerUser)
  .post(wrapAsync(userController.handleSignup));

//Login Routes
router
  .route("/login")
  .get(userController.loginUser)
  .post(
    savedRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.handleLogin
  );

// Logout Route
router.get("/logout", isLoggedIn, userController.logoutUser);

module.exports = router;
