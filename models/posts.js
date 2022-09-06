const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')

const postSchema = new Schema ({
    username: {type: String},
    post: {type: String, required: true, maxLength: 280},
    userId: {type: mongoose.Types.ObjectId, ref: 'Users'},
}, 
{timestamps:true});

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;