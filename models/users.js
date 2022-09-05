const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./posts')

const userSchema = new Schema ({
    name: {type: String},
    username: {type: String, required: true, unique: true, min: 3, max: 20},

    email: {type: String, required: [true, 'Please Enter Password']},
    password: {type: String, required: true},
    image: String,
    posts: [{type: mongoose.Types.ObjectId, ref: 'Posts'}],
},
{timestamps: true},
);

const Users = mongoose.model('Users', userSchema);

module.exports = Users;













