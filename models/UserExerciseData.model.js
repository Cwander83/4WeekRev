 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const UserExerciseDataSchema = new Schema({

     exerciseName: {
         type: String,
         trim: true,
         required: true,

     },
     setNumber: {
         type: Number,

     },
     numberOfReps: {
         type: Number,
         trim: true,
         default: 0,
     },
     notes: {
         type: String,
         trim: true,
     },

     updatedAt: {
         type: Date,
         default: Date.now
     },

 });

 const UserExerciseData = mongoose.model('UserExerciseData', UserExerciseDataSchema);

 module.exports = UserExerciseData;