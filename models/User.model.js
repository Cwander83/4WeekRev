const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    minlength: 6,
    unique: true,
    required: 'Username is Required',
  },
  email: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true,
  },

  bodyweights: [
    {
      weight: {
        type: Number,
        trim: true,
        default: null,
      },
      updated: {
        type: Date,
        default: Date.now,
        
      },
    },
  ],

  newsletter: {
    type: Boolean,
    default: false,
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
  exerciseData: [
    {
      type: Schema.Types.ObjectId,
      ref: 'UserExerciseData',
    },
  ],
});

module.exports = User = mongoose.model('User', UserSchema);

