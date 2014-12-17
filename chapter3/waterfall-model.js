var async = require('async');

async.waterfall([
  function(callback) {
    callback(null, Math.random() * 10, Math.random() * 10);
  },
  function(a, b, callback) {
    callback(null, a * a + b * b);
  },
  function(cc, callback) {
    callback(null, Math.sqrt(cc))
  }
], function(error, c) {
  console.log(c);
});