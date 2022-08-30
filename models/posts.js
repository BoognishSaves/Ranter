const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    username: String,
    post: {type: String, required: true, maxLength: 280},
    image: String,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
});

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;