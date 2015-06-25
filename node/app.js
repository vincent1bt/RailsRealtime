var io = require('socket.io').listen(5001),
    redis = require('redis').createClient();

redis.subscribe('rt-change');

io.on('connection', function(socket) {
  //console.log('Usuario conectado');
  redis.on('message', function(channel, message) {
    //console.log('post creado');
    socket.emit('rt-change', JSON.parse(message));
  });
});
