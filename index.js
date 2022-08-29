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


// App Configuration 
const app = express();
const PORT = 4000
app.set('view engine', 'ejs');





















app.listen(4000, () => console.log('listening on port:', PORT))