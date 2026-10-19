const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/index');

test('greet returns a greeting', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});
