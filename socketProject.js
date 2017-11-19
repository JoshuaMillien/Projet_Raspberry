var http = require('http');
var fs = require('fs');
var disp = require('testDispWeb.js');
var io = require('socket.io');

var app = http.createServer(function(req, res) {
    fs.readFile('./testDispWeb.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

io = io.listen(app);

io.sockets.on('connection', function(socket){
  console.log('Je suis co !!');
  socket.emit('message', 'Vous êtes bien connecté !');
  disp.alterner();
});



app.listen(8080);
