const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    image: {type: String, default: 'default.png'},
    posts: Array,
    followers: Array,
    following: Array,
});

const User = mongoose.model('User', userSchema);

module.exports = User;