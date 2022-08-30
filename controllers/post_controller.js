const express = require('express');
const router = express.Router();
const db = require('../models');
const Users = require('../models/users.js');
const Posts = require('../models/posts.js');

// Middleware

router.use(express.json());
router.use(express.urlencoded({ extended: false }));



// New Routes

// Post
router.get('/new', (req, res) => {
    res.render('newpost.ejs');
})



// Create Post
router.post('/', async (req, res) => {
    try {
        const createPost = req.body;
        const newPost = await db.Posts.create(createPost);
        console.log(createPost);
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
        const allPosts = await db.Posts.find()
        const context = { posts: allPosts};
        console.log(allPosts)
        res.render('postindex.ejs', context);
    } catch(error) {
        console.log(error)
        res.redirect('/404')
    }
});






















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