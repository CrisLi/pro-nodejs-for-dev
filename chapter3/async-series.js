var async = require('async');

var task1 = function(callback) {
  setTimeout(function() {
    console.log("Task 1");
    callback(null, 1);
  }, 300);
};

var task2 = function(callback) {
  setTimeout(function() {
    console.log("Task 2");
    callback(null, 2);
  }, 200);
};

var task3 = function(callback) {
  setTimeout(function() {
    console.log("Task 3");
    callback(null, 3);
  }, 100);
};

var tasks = [task1, task2, task3];

async.series(tasks, function(error, results) {
  console.log(results);
});