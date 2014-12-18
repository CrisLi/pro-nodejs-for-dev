var intervalId = setInterval(function() {
  console.log("In interval function.");
}, 1000);

setTimeout(function() {
  clearInterval(intervalId);
}, 10 * 1000);
