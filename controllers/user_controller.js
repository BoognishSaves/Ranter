const express = require('express');
const router = express.Router();
const db = require('../models');
const Users = require('../models/users.js');
const Posts = require('../models/posts.js');




// Middleware

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Index Route 

router.get('/', async (req, res) => {
    try {
        const allUsers = await db.Users.find()
        const context = { users: allUsers};
        // console.log(allUsers)
        res.render('userindex.ejs', context);
    } catch(error) {
        console.log(error)
        req.err= error;
        return next()
    }
});

// New Routes

// User
router.get('/new', (req, res) => {
    res.render('newuser.ejs');
})



// Create Route
// New User
router.post('/', async (req, res, next) => {
    try {
        const createUser = req.body;
        const newUser = await db.Users.create(createUser);
        console.log(createUser);
        res.redirect('/user');
    } catch (error) {
       console.log(error);
       req.err= error;
        return next()
    }
});




// Show Route 

router.get('/:id', async (req, res, next) => {
    try{
        const foundUser = await db.Users.findById(req.params.id).populate('userId').exec();
        // const userPost = await db.Posts.find({post: foundUser})
        const context = { users: foundUser, id: foundUser._id}
        // console.log(userPost);
        res.render("showuser.ejs",context);
    
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
            const deleteUser = await db.Users.findByIdAndDelete(req.params.id)
            return res.redirect("/user")

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
        const foundUser = await db.Users.findById(req.params.id)
        res.render('edituser.ejs', {user: foundUser, id: foundUser._id});
        console.log(foundUser)

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
            const updateUser = req.body
            await db.Users.findByIdAndUpdate(req.params.id, updateUser, {new:true})
            res.redirect(`/user/${req.params.id}`);
        }catch(error){
            // throw new Error(err)
            console.log(error)
            req.error= error;
            return next();
        }
    })




// module.exports.account = async (req, res) => {
//     const userId = req.user._id.toString();
//     const user = await User.findById(userId);
//     res
// }


module.exports = router;