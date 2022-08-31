const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')

const postSchema = new Schema ({
    userId: Schema.Types.ObjectId,
    post: {type: String, required: true, maxLength: 280},
    image: String,
},
{timestamps: true},
);

const Post = mongoose.model('Posts', postSchema);

module.exports = Post;