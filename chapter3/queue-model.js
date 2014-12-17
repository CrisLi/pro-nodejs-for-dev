var async = require('async');
var queue = async.queue(function(task, callbak) {
  // process task argument
  console.log(task);
  callbak(null);
}, 4);

var i = 0;

setInterval(function() {
  queue.push({
    id: i
  }, function(error) {
    console.log("Finished a task");
  });
  i++;
}, 200);
