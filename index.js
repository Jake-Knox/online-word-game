const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var path = require('path');
const { start } = require('repl');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let nameChars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let users = [];
let rooms = [];

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


const createRoom = (name) => {

  let newGame = {
      room:name,
      p1:"",
      p2:"",
      moves:0,
      board:["","","","","","","","","","","","","","","","","","","","","","","","",""],
  }
  rooms.push(newGame)
}

const joinRoom = (name, pName) => {
  
  for(let i = 0; i < rooms.length; i ++){
    //check for the correct room name
    if(rooms[i].room == name)
    {
      // check for if there is space in the lobby
      if(rooms[i].p1 == '')
      {
        // no p1, join game
        rooms[i].p1 = pName
        return true;
      }
      else if(rooms[i].p2 == '')
      {
        // no p2, join game
        rooms[i].p2 = pName
        return true;
      }
      else
      {
        // add feature to view a game without playing here?
        console.log(`Game: ${name} is full. User ${pName} cannot join.`)
        return false;
      }
    }   
  }
}

const userJoinRoom = (room) => {
  for(let i = 0; i < rooms.length; i ++)
  {
    if(rooms[i].room == room)
    {
      io.to(room).emit("user join room", rooms[i]);
    }
  }
}

const updateRoom = (dataArray) => {
  
  //

  // console.log(`after: ${dataArray}`); // check working fine
  console.log(`sending to ${dataArray[0]}`);
  io.to(dataArray[0]).emit(`update room`, (dataArray));

}

const leaveRoom = (userID) => {
  // console.log(rooms) // check to see if empty game is removed
  let user = "";
  for(let i = 0; i < users.length; i++){
    if(users[i][0] == userID){
      user = users[i][1];
    }
  }

  for(let i = 0; i < rooms.length; i++)
  {
    if(rooms[i].p1 == user)
    {
      rooms[i].p1 = "";
    }
    else if(rooms[i].p2 == user)
    {
      rooms[i].p2 = "";
    }
    
    if(rooms[i].p1 == "" && rooms[i].p2 == "")
    {
      // delete from server game list
      const index = rooms.indexOf(rooms[i]);
      if (index > -1) {
        rooms.splice(index, 1); // 2nd parameter means remove one item only
      }      
      // console.log(rooms) // check to see if empty game is removed
    }
  }
}


io.on('connection', (socket) => {
  // console.log('user connected, id: ' + socket.id);

  let username = createName();
  io.to(socket.id).emit("player name", username);
  users.push([socket.id,username]);
  // console.log(`${users.length} users`);

  socket.on('disconnect', () => {
    // console.log(`user disconnected, id: ${socket.id}`);
    removeUser(socket.id);
    leaveRoom(socket.id);
  });

  socket.on('user leave room', () => {
    console.log(`user leaving game room, id: ${socket.id}`);
    leaveRoom(socket.id);
  });

  socket.on('new room', (newRoom, pName) => {

    for(let i = 0; i < rooms.length; i ++)
    {
      if(rooms[i].room == newRoom)
      {
        console.log(`room ${newRoom} already exists`)
        let msg = "room already exists";
        io.to(socket.id).emit("cannot join", msg);
        // leave this func to stop new room being created
        return;
      }
    }
    console.log("new room created: " + newRoom);
    createRoom(newRoom, pName);

    console.log("user " + pName + " joining: " + newRoom);
    joinRoom(newRoom, pName);
    socket.join(newRoom);

    userJoinRoom(newRoom);
    
    // console.log(rooms); // to show rooms after join
  });

  socket.on('join room', (room, pName) => {

    if(joinRoom(room, pName))    
    {
      console.log("user " + pName + " joining: " + room);  
      socket.join(room);  
      userJoinRoom(room);
    }  
    else{
      let msg = "room is full";
      io.to(socket.id).emit("cannot join", msg);
    }     
  });

  socket.on('end turn', (data) => {
    // room, player name, index of square, words make array
    let roomName = data[0];
    let userName = data[1];
    let charArray = data[2];
    let tileIndex = data[3];
    let wordsMade = data[4];

    console.log("end turn recieved");

    console.log(`1: ${roomName}`);
    console.log(`2: ${userName}`);
    console.log(`3: ${charArray}`);
    console.log(`4: ${tileIndex}`);
    console.log(`5: ${wordsMade}`);

    for(let i = 0; i < rooms.length; i ++)
    {
      if(rooms[i].room == roomName)
      {
        rooms[i].moves += 1;
        rooms[i].board = charArray;

        let sendArry = [];
        sendArry = [roomName,userName,rooms[i].moves,charArray,tileIndex,wordsMade];

        //
        // console.log(`before: ${sendArry}`); // check working fine
        updateRoom(sendArry);
      }
    }

  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});