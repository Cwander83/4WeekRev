const express = require('express');
const router = express.Router();

// connecting the function to a route
const user_controller = require('../controllers/user_controller');

// register
router.route('/Register').post(user_controller.register);

// login
router.route('/login').post(user_controller.login);

// user full data
router.route('/user_data/:id').get(user_controller.userData);

// user weight
router.route('/newbodyweight/:id').put(user_controller.userWeight);

//newsletter
router.route('/newsletter/:id').put(user_controller.newsletter);

//email
router.route('/email/:id').put(user_controller.email);

//user removes email from profile
router.route('/delete_email/:id').put(user_controller.deleteEmail);

// user exercise data
router.route('/user_exercise_data/:id').post(user_controller.userExerciseData);

// user removes a exercise data
router
  .route('/user_exercise_remove/:id')
  .delete(user_controller.userExerciseDataRemove);
// user removes a exercise data
router
  .route('/user_exercise_update/:id')
  .put(user_controller.userExerciseDataUpdate);

module.exports = router;
