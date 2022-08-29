const express = require('express');
const router = express.Router();
// const db = require('../models/posts');
const User = require('../models/users.js');
const Posts = require('../models/posts.js');
// const { model } = require('mongoose');



// Middleware

router.use(express.json());
router.use(express.urlencoded({ extended: false }));












module.exports = router;