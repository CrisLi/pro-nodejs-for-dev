var fs = require('fs');

try {
  fs.readFile("", "utf8", function(error, data) {
    if (error) {
      throw error;
    }
    console.log(data);
  });
} catch (exception) {
  console.log("The exception was caught!");
}