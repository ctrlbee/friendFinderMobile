var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname + '/../www')));

server.listen(port);

var storage = {};

io.on('connection', function (socket) {
  socket.on('init', function (data) {
    socket.join('/'+data);
    storage[data] = {};
    socket.on('userData', function (info) {
      storage[data][info.id] = info;
      socket.emit('serverData', storage[data]);
    });
    socket.on('logout', function (info) {
      delete storage[data][info];
      socket.leave('/'+data);
      socket.emit('serverData', storage[data]);
    })
  });
});

module.exports = app;
