const { modules } = require('should');

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

modules.exports = {
  sleep
};
