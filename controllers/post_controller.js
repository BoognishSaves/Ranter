const express = require('express');
const router = express.Router();
const db = require('../models');
const User = require('../models/users.js');
const Posts = require('../models/posts.js');

// Middleware

router.use(express.json());
router.use(express.urlencoded({ extended: false }));



// New Routes

// Post
router.get('/new', (req, res) => {
    res.render('newpost.ejs');
})

// End New Routes  

// Create Route
// New Post
// router.post('/', async (req, res) => {
//     try {
//         const Post = await 
        
//     }
// })




// Show Route 


// Index Route 

// Feed

router.get('/feed', (req, res) => {
    res.render('postindex.ejs');
})

// router.get('/', async (req, res, next) => {
//     try {
//         const posts = await Posts.find();
//         res.render('index.ejs', { posts });
//     } catch(error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });






module.exports = router;