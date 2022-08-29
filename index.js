// Require Modules
const express = require('express');
const mongoose = require('mongose');
require('dotenv').config()



// App Configuration 
const app = express();
const PORT = 4000
app.set('view engine', 'ejs');





















app.listen(4000, () => console.log('listening on port:', PORT))