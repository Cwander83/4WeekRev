// uses the .env file
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
// brings in the routes
const routes = require('./routes');
const passport = require('passport');
// starts Express.JS as a variable
const app = express();

//
app.use(logger('dev'));
// parseing the JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//mongoose Promise
mongoose.Promise = global.Promise;

// opening connection to mongodb cluster
mongoose
  .connect(process.env.MONGO_MLAB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connected!'))
  .catch(err => console.error(err));

// passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

app.use(routes);

// gives the host a PORT to use
const PORT = 5000;

// Start the server
app.listen(PORT, () => console.log(`App running on ${PORT}!`));
 