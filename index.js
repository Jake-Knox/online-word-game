const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let nameChars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let names = [];

const createName = () => {
  
}

io.on('connection', (socket) => {
  console.log('user connected, id: ' + socket.id);
  io.to(socket.id).emit("get id", socket.id);


  socket.on('disconnect', () => {
    console.log(`user disconnected, id: ${socket.id}`);
  });


 

  

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});