var events = require('events');
var emitter = new events.EventEmitter();
var username = 'Chris';
var password = 'password';

emitter.on('userAdded', function(username, password) {
  console.log(username, password);
});

emitter.emit('userAdded', username, password);


