require("../index.js");

module.exports = {
    Users: require('./users'),
    Posts: require('./posts'),
    auth: require("../controllers/auth_controller.js"),
}