// Require Modules
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const navLinks = require('./navLinks');
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
const authController = require('./controllers/auth_controller.js')


// App Configuration 
const app = express();
const PORT = 4000
app.set('view engine', 'ejs');


// Middleware
app.use(
  session({
      // where to store the sessions in mongodb
      store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
      // secret key is used to sign every cookie to say its is valid
      secret: "super secret",
      resave: false,
      saveUninitialized: false,
      // configure the experation of the cookie
      cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
      },
  })
);

app.use(function (req, res, next) {
  res.locals.user = req.session.currentUser;
  next();
});

const authRequired = function (req, res, next) {
  if (req.session.currentUser) {
    return next();
  }

  return res.redirect("/login");
};

app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use('/user', userController)
app.use('/post', authRequired, postController)
app.use(navLinks);
// Here we will add the routes for login and register 
app.use("/", authController);



// Home Route

app.get('/', (req, res) => {
    res.render('home.ejs')
})






















app.listen(4000, () => console.log('listening on port:', PORT))