const express = require('express');
const router = express.Router();

const program_controller = require('../controllers/program_controller');

// route to full program
router.route(fullProgram()).get(program_controller.FullProgram);

// route for filtering by week
router.route('/program_week/:week').get(program_controller.FilterByWeek);

// route for filtering by day
router.route('/program_day/:day').get(program_controller.FilterByDay);

// route for exercise by name
router
  .route('/workout_name/:name')
  .get(program_controller.FilterByExerciseName);
  
// route for group of bodyparts
router
  .route('/workout_bodypart/:bodypart')
  .get(program_controller.FilterByExerciseBodyPart);

module.exports = router;

// another way if i need to break the route apart
function fullProgram() {
  return '/fullprogram';
}

