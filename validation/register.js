const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = (data) => {
  let errors = {};

  data.name = data.name ? data.name : '';
  data.email = data.email ? data.email : '';
  data.password = data.password ? data.password : '';

  data.name = validator.trim(data.name);
  data.email = validator.trim(data.email);

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
