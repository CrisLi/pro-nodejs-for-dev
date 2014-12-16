var fs = require('fs');
var filename = "foo.txt";

function cbReadFile(error, data) {
  if (error) {
    throw error;
  }

  console.log(data);
}

function cbStat(error, stats) {
  if (error) {
    throw error;
  }

  if (stats.isFile()) {
    fs.readFile(fileName, "utf8", cbReadFile);
  }

}

function cbExists(exists) {
  if (exists) {
    fs.stat(filename, cbStat);
  }
}

fs.exists(filename, cbExists);
