const express = require('express');
const router = express.Router();
const programRoutes = require('./program.route');
const userRoutes = require('./user.route');

router.use('/user', userRoutes);
router.use('/workout', programRoutes);



module.exports = router;
