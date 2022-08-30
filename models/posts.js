const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')

const postSchema = new Schema ({
    userId: {type: String, ref: User},
    post: {type: String, required: true, maxLength: 280},
    image: String,
},
{timestamps:true},
);

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;