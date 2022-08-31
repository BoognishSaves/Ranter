const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')

const postSchema = new Schema ({
    post: {type: String, required: true, maxLength: 280},
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, 
{timestamps:true});

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;