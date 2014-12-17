var async = require('async');

var task1 = function(callback) {
  setTimeout(function() {
    console.log("Task 1");
    callback(new Error("Problem in Task 1"), 1);
  }, 300);
};

var task2 = function(callback) {
  setTimeout(function() {
    console.log("Task 2");
    callback(null, 2);
  }, 200);
};

var tasks = [task1, task2];

async.series(tasks, function(error, results) {
  if (error) {
    console.log(error.toString());
  } else {
    console.log(results);
  }
});
