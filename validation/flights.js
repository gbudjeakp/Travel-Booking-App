/** @format */
const validator = require("validator");

const dateInPast = (date1, date2 = new Date()) => {
  date1 = new Date(`${date1}T00:00`);
  if (typeof date2 === "string") {
    date2 = new Date(`${date2}T00:00`);
  } else {
    const year = date2.getFullYear();
    const month = date2.getMonth();
    const day = date2.getDate();
    date2 = new Date(year, month, day);
  }
  return date1 < date2;
};
const checkDepartDate = (date, err, key) => {
  if (dateInPast(date)) {
    return (err[key] = "This date is a past date.");
  }
  return date;
};
const checkReturnDate = (date1, date2, err, key) => {
  if (dateInPast(date1, date2)) {
    return (err[key] = "This date is prior to the departure date.");
  }
  return date1;
};
// check date format
const validatorOptions = { format: "YYYY-MM-DD", strictMode: true };
const validateDate = (date, err, key) => {
  if (!validator.isDate(date, validatorOptions)) {
    return (err[key] = "Invalid date format.");
  }
  return date;
};
// check location
const validateLocation = (location, err, key) => {
  const trimedLocation = location.replace(/\s/g, "");
  if (validator.isAlpha(trimedLocation)) {
    return location;
  }
  return (err[key] = "Invalid format.");
};

module.exports = {
  checkDepartDate,
  checkReturnDate,
  validateDate,
  validateLocation,
};
