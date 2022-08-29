const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    post: {type: String, required: true, maxLength: 280},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
});

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;