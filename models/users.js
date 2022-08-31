const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema ({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    posts: {
        type: mongoose.Types.ObjectId,
        ref: 'Posts',
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;