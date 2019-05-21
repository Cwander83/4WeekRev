const db = require('../models');

//
//
//   still need to fix the res.querys for all routes

// controllers for the main workout program
module.exports = {
  // finds the whole program
  FullProgram: function(req, res) {
    db.WorkoutProgram.find({})
      .populate('workouts')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // finds and filters by One week
  FilterByWeek: function(req, res) {
    db.WorkoutProgram.find({ week: req.params.week })
      .populate('workouts')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // finds and filters by a certain day
  FilterByDay: function(req, res) {
    //  console.log(req);

    db.WorkoutProgram.find({ day: req.params.day })
      .populate('workouts')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // finds all a workout by the exercise name
  FilterByExerciseName: function(req, res) {
    db.Workout.findOne({ exercisename: req.params.exercisename })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // finds a workout by the body part
  FilterByExerciseBodyPart: function(req, res) {
    db.Workout.findOne({ bodypart: req.params.bodypart })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
