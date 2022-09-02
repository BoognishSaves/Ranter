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

router.get('/', async (req, res, next) => {
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
router.get('/new', async (req, res, next) => {
    try {
    const allUsers = await db.Users.find()
    res.render('newpost.ejs', {users: allUsers});
    } catch (error) {
        console.log(error);
       req.err= error;
       return next()
    }
})



// Create Post
router.post('/', async (req, res, next) => {
    try {
        const createPost = req.body;
        const newPost = await db.Posts.create(createPost);
        console.log(newPost);
        res.redirect('/post');
    } catch (error) {
       console.log(error);
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
      const foundPost = await db.Posts.findById(req.params.id).populate("userId").exec();
      const context = { posts: foundPost, id: foundPost._id}
      console.log(context)
    //   console.log(postUser);
      res.render("showpost.ejs", context);
  
  }catch(error){
      // throw new Error(err)
      console.log(error)
      req.error= error;
      return next()
   
  }
  });

     // Delete

     router.delete("/:id", async (req, res, next) => {
        try{
            const deletePost = await db.Posts.findByIdAndDelete(req.params.id)
            return res.redirect("/post")

        }catch(error){
        // throw new Error(err)
        console.log(error)
        req.error= error;
        return next()
     
    }
    })





    // Edit

    router.get('/:id/edit', async (req, res, next) => {
        try{ 
        const foundPost = await db.Posts.findById(req.params.id)
        res.render('editpost.ejs', {post: foundPost, id: foundPost._id});
        console.log(foundPost)

        }catch(error){
        // throw new Error(err)
        console.log(error)
        req.error= error;
        return next()
     
    }
    });

    // Update 

    router.put("/:id", async (req, res, next) => {
        try{
            const updatePost = req.body
            await db.Posts.findByIdAndUpdate(req.params.id, updatePost, {new:true})
            res.redirect(`/post/${req.params.id}`);
        }catch(error){
            // throw new Error(err)
            console.log(error)
            req.error= error;
            return next();
        }
    })










module.exports = router;