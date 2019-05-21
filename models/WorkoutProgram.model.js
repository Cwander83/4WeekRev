const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutProgram = new Schema({
  week: {
    type: Number,
  },
  // days will be 1 - 7
  day: {
    type: Number,
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout',
    },
  ],
});

module.exports = mongoose.model('WorkoutProgram', WorkoutProgram);
