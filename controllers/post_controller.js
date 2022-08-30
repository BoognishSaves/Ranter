const express = require('express');
const router = express.Router();
const db = require('../models');
const Users = require('../models/users.js');
const Posts = require('../models/posts.js');
const methodOverride = require('method-override');


// Middleware

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(methodOverride('_method'));



// Index Route 

router.get('/', async (req, res) => {
    try {
        const allPosts = await db.Posts.find()
        const context = { posts: allPosts};
        // console.log(allPosts)
        res.render('postindex.ejs', context);
    } catch(error) {
        console.log(error)
        req.err= error;
        return next()
    }
});

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
        // console.log(createPost);
        res.redirect('/post');
    } catch (err) {
       console.log(err);
       req.err= error;
       return next()
    }
});


// Feed

router.get('/feed', (req, res) => {
    res.render('postindex.ejs');
})



// Show Route 

router.get('/:id', async (req, res, next) => {
  try{
      const foundPost = await db.Posts.findById(req.params.id)
      console.log(foundPost);
      const context = { posts: foundPost, id: foundPost._id}
      res.render("showpost.ejs",context);
  
  }catch(err){
      // throw new Error(err)
      console.log(err)
      req.err= error;
      return next()
   
  }
  });










module.exports = router;