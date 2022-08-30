const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true, min: 3, max: 20},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, min: 6},
    profileImage: {type: String, default: ''},
    posts: Array,
    followers: Array,
    following: Array,
},
{timestamps: true},
);

const User = mongoose.model('User', userSchema);

module.exports = User;