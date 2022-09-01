const express = require('express');
const router = express.Router();
const db = require('../models');
const Users = require('../models/users.js');
const Posts = require('../models/posts.js');




// Middleware

router.use(express.json());
router.use(express.urlencoded({ extended: false }));



// New Routes

// User
router.get('/new', (req, res) => {
    res.render('newuser.ejs');
})



// Create Route
// New User
router.post('/', async (req, res) => {
    try {
        const createUser = req.body;
        const newUser = await db.Users.create(createUser);
        console.log(createUser);
        res.redirect('/');
    } catch (err) {
       console.log(err);
       res.redirect('/404')
    }
});



// Show Route 


// Index Route 

router.get('/', async (req, res) => {
    try {
        const allUsers = await db.Users.find()
        const context = { users: allUsers};
        console.log(allUsers)
        res.render('userindex.ejs', context);
    } catch(error) {
        console.log(error)
        res.redirect('/404')
    }
});




module.exports = router;