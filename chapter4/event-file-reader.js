var EventEmitter = require('events').EventEmitter;
var util = require('util');
var fs = require('fs');

function FileReader(filename) {
  var _self = this;

  EventEmitter.call(_self);

  _self.on('stats', function() {
    fs.stat(filename, function(error, stats) {
      if (!error && stats.isFile()) {
        _self.emit('read');
      }
    });
  });

  _self.on('read', function() {
    fs.readFile(filename, 'utf8', function(error, data) {
      if (!error && data) {
        console.log(data);
      }
    });
  });

  fs.exists(filename, function(exists) {
    if (exists) {
      _self.emit('stats');
    }
  });
};

util.inherits(FileReader, EventEmitter);

var reader = new FileReader('foo.txt');
