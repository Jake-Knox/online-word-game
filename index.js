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
let users = [];

const findName = (searchName) => {
  return users.some(row => row.includes(searchName));
}

const createName = () => {
  let newName = ""; 
  let nameUnique = true;
  while (nameUnique)   
  {
    for (let i = 0; i < 6; i++ )
    {
        const random = Math.floor(Math.random() * nameChars.length);
        newName += nameChars[random];
    } 
    // console.log(`new name: ${newName}`);
    
    if(findName(newName)){
      console.log(`${newName} already in use, finding new name`);
    }
    else{
      // console.log(`${newName} available`);
      nameUnique = false;
    }    
  }     
  return newName;
}

const removeUser = (userID) => {

  // users.some(row => row.includes(userID));

  for(let i = 0; i < users.length; i++)
  {
    if(users[i][0] == userID){
      const index = users.indexOf(users[i]);
      if (index > -1) {
        users.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  } 
}

io.on('connection', (socket) => {
  // console.log('user connected, id: ' + socket.id);

  let username = createName();
  io.to(socket.id).emit("player name", username);
  users.push([socket.id,username]);
  console.log(`${users.length} users`);

  socket.on('disconnect', () => {
    // console.log(`user disconnected, id: ${socket.id}`);
    removeUser(socket.id);
  });


 

  

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});