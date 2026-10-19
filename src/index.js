const _ = require('lodash');

function greet(name) {
  return _.template('Hello, <%= name %>!')({ name });
}

module.exports = { greet };
