const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");



// Register 
router.get("/register", function (req, res) {
    return res.render("auth/register");
  });























module.exports = router;