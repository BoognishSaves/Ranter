const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    username: {type: String, required: true, unique: true},
    email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;