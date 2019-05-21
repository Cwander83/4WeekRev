const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const db = require('../models');

// controllers for the user and user data
module.exports = {
  // register user
  register: (req, res) => {
    // form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    db.User.findOne({ userName: req.body.userName }).then(user => {
      console.log(`user: ${user}`);
      if (user) {
        return res.status(400).json({ userName: 'userName already exists' });
      } else {
        const newUser = new User({
          userName: req.body.userName,
          password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  },

  // login
  login: (req, res) => {
    // form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // shorting code for login
    const userName = req.body.userName;
    const password = req.body.password;

    db.User.findOne({ userName }).then(user => {
      // check if user exists
      if (!user) {
        return res.status(404).json({ userNotFound: 'Username not found' });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // user matched
          // create JWT payload
          const payload = {
            id: user.id,
            userName: user.userName,
          };

          // sign token
          jwt.sign(
            payload,
            process.env.SECRET,
            { expiresIn: 31556926 },
            (err, token) => {
              res.json({ success: true, token: 'Bearer ' + token });
            },
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: 'Password incorrect' });
        }
      });
    });
  },

  // user profile data full pull
  userData: (req, res) => {
    db.User.find({ _id: req.params.id })
      // collecting exercise data from sub schema
      .populate('exerciseData')
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(422).json(err));
  },

  // userWeight
  userWeight: (req, res) => {
    const weights = { weight: req.body.weight };

    db.User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { bodyweights: weights } },
    )
      .then(newData => {
        console.log(`User changed their body weight`);
        res.json(newData);
      })
      .catch(err => res.status(422).json(err));
  },

  // change newsletter option default false
  // change to true if they want to recieve it
  newsletter: (req, res) => {
    const option = req.body;

    db.User.findOneAndUpdate({ _id: req.params.id }, option)
      .then(newsletter => {
        console.log(`User signed up for newsletter`);
        res.json(newsletter);
      })
      .catch(err => res.status(422).json(err));
  },

  // adding a email user
  email: (req, res) => {
    const email = req.body;

    db.User.findOneAndUpdate({ _id: req.params.id }, email)
      .then(email => {
        res.json(email);
      })
      .catch(err => res.status(422).json(err));
  },

  // if user chooses to remove their email
  deleteEmail: (req, res) => {
    const email = null;

    db.User.findOneAndUpdate({ _id: req.params.id }, { $set: { email: email } })
      .then(email => {
        res.json(email);
      })
      .catch(err => res.status(422).json(err));
  },

  // adds users exercise data to database
  userExerciseData: (req, res) => {
    const UserExerciseData = db.UserExerciseData;
    const exercise = new UserExerciseData(req.body);

    exercise.save((err, data) => {
      if (err) throw console.log(err);
      else {
        db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { exerciseData: data._id } },
        )
          .then(function(data) {
            console.log(`New user exercise entered!`);
            res.json(data);
          })
          .catch(function(err) {
            res.json(err);
          });
      }
    });
  },

  // adding a email user
  userExerciseDataUpdate: (req, res) => {
    db.UserExerciseData.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => {
        console.log(`User exercise data updated`);
        res.json(data);
      })
      .catch(err => res.status(422).json(err));
  },

  
  // user wants to remove a saved excerise entry
  userExerciseDataRemove: (req, res) => {
    db.UserExerciseData.findOneAndDelete({ _id: req.params.id })
      .then(function(data) {
        console.log(`User exercise deleted`);
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
};

//
