const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  console.log(`errors in validate login file ${errors}`);
  // Convert empty fields to an empty string so we can use validator functions
  data.userName = !isEmpty(data.userName) ? data.userName : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Username checks
  if (Validator.isEmpty(data.userName)) {
    errors.userName = 'Username field is required';
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
