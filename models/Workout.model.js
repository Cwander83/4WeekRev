const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Workout = new Schema({
  totalsets: {
    type: Number,
  },
  regularsets: {
    type: Number,
  },
  regularreps: {
    type: String,
  },
  exercisename: {
    type: String,
  },
  superset: {
    type: Number,
  },
  warmupsets: {
    type: Number,
  },
  warmupreps: {
    type: String,
  },
  warmupdesc: {
    type: String,
  },
  bodypart: {
    type: String,
  },
  regulardesc: {
    type: String,
  },
});

module.exports = mongoose.model('Workout', Workout);
