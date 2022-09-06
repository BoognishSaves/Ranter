const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../models");
const Users = require('../models/users.js');
const methodOverride = require('method-override');


// middleware
router.use(express.urlencoded({ extended: false }));
router.use(methodOverride('_method'));

// Register 
router.get("/register", function (req, res) {
    return res.render("auth/register");
  });


// Register Post

router.post("/register", async function (req, res) {
    try {
      // step check if user exists
      let userInfo = req.body;
      console.log(req.body)
      let foundUser = await Users.exists({email: userInfo.email});
      // if so redirect to login
      if (foundUser) {
        return res.redirect("/login");
      }
      // if not create user and redirect to login
  
      // salt will created a more complicated hash
      const salt = await bcrypt.genSalt(12);
      // hash will convert our password into something more secure
      // test1234 => "$2a$10$5vR9VhGpkARz6EFPdkuNQ.aZNRGUgSCNSKEb9Xp1IKzrfxYETlkB2"
      const hash = await bcrypt.hash(userInfo.password, salt);
  
      req.body.password = hash;
  
      // create user in database
      const newUser = await Users.create(req.body);
  
      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.send(err);
    }
  });




// Login

router.get("/login", function (req, res) {
    res.render("auth/login");
  });

// Login Post

router.post("/login", async function (req, res) {
    try {
        
        let userInfo = req.body;
        const foundUser = await Users.findOne({ email: userInfo.email });
        if (!foundUser) return res.redirect("/register");
        
       
        const match = await bcrypt.compare(userInfo.password, foundUser.password);
    
        // if not match send error
        if (!match) return res.send("password invalid");
    
        // if match create the session and redirect to home\
        // here we have created the key card
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
    
        return res.redirect("/post");
    } catch (err) {
        console.log(err);
        req.err = err;
        res.send(err);
    }
});

// Logout

router.get("/logout", async function (req, res) {
    try {
        await req.session.destroy();
        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});















module.exports = router;