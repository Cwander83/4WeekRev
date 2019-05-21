const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutProgramSchema = new Schema({
  week: Number,
  day: Number,
  bodyPart: String,
  name: String,
  totalSets: Number,
  warmUpSets: Number,
  warmUpReps: Number,
  WorkingSets: Number,
  WorkingRepsMin: Number,
  WorkingRepsMax: Number,
  warmUpDesc: String,
  workingSetsDesc: String,
});

const WorkoutProgram = mongoose.model('WorkoutProgram', WorkoutProgramSchema);

module.exports = WorkoutProgram;
