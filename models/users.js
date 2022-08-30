const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true, min: 3, max: 20},
    email: {type: String, required: true, unique: true},
    posts: Array,
    followers: Array,
    following: Array,
},
{timestamps: true},
);

const User = mongoose.model('User', userSchema);

module.exports = User;