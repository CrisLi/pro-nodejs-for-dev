var fs = require('fs');
var filename = "foo.txt";

fs.exists(filename, function(exists) {

  if (exists) {

    fs.stat(filename, function(err, stats) {

      if (err) {
        throw err;
      }

      if (stats.isFile()) {
        fs.readFile(filename, "utf8", function(err, data) {
          if (err) {
            throw err;
          }
          console.log(data);
        });
      }

    });

  }
});
