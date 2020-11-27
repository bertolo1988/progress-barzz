const moment = require('moment');

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function getDigitsFromString(inputString) {
  return inputString.replace(/\D/g, '');
}

function isValidDateString(dateString, format, strictMode = true) {
  return moment(dateString, format, strictMode).isValid();
}

module.exports = {
  sleep,
  getDigitsFromString,
  isValidDateString
};
