// Require Modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()


// Database Configuration
const mongoURI = process.env.MONGODB_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongo not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

// Controller Import
const userController = require('./controllers/user_controller.js')
const postController = require('./controllers/post_controller.js')


// App Configuration 
const app = express();
const PORT = 4000
app.set('view engine', 'ejs');


// Middleware

app.use('/user', userController)
app.use('/post', postController)


// Home Route

app.get('/', (req, res) => {
    res.render('home.ejs')
})



// 404 Wildcard Route
app.get('*', (req,res)=>{
    res.render('404')
})


















app.listen(4000, () => console.log('listening on port:', PORT))