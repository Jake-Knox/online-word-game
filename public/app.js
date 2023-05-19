var socket = io();

// imports from dictionary
import { dictA2Letter, dictA3Letter, dictA4Letter, dictA5Letter }  from "./iDictionary.js";
import { dictB2Letter, dictB3Letter, dictB4Letter, dictB5Letter }  from "./iDictionary.js";
import { dictC2Letter, dictC3Letter, dictC4Letter, dictC5Letter }  from "./iDictionary.js";
import { dictD2Letter, dictD3Letter, dictD4Letter, dictD5Letter }  from "./iDictionary.js";
import { dictE2Letter, dictE3Letter, dictE4Letter, dictE5Letter }  from "./iDictionary.js";
import { dictF2Letter, dictF3Letter, dictF4Letter, dictF5Letter }  from "./iDictionary.js";
import { dictG2Letter, dictG3Letter, dictG4Letter, dictG5Letter }  from "./iDictionary.js";
import { dictH2Letter, dictH3Letter, dictH4Letter, dictH5Letter }  from "./iDictionary.js";
import { dictI2Letter, dictI3Letter, dictI4Letter, dictI5Letter }  from "./iDictionary.js";
import { dictJ2Letter, dictJ3Letter, dictJ4Letter, dictJ5Letter }  from "./iDictionary.js";
import { dictK2Letter, dictK3Letter, dictK4Letter, dictK5Letter }  from "./iDictionary.js";
import { dictL2Letter, dictL3Letter, dictL4Letter, dictL5Letter }  from "./iDictionary.js";
import { dictM2Letter, dictM3Letter, dictM4Letter, dictM5Letter }  from "./iDictionary.js";
import { dictN2Letter, dictN3Letter, dictN4Letter, dictN5Letter }  from "./iDictionary.js";
import { dictO2Letter, dictO3Letter, dictO4Letter, dictO5Letter }  from "./iDictionary.js";
import { dictP2Letter, dictP3Letter, dictP4Letter, dictP5Letter }  from "./iDictionary.js";
import { dictQ2Letter, dictQ3Letter, dictQ4Letter, dictQ5Letter }  from "./iDictionary.js";
import { dictR2Letter, dictR3Letter, dictR4Letter, dictR5Letter }  from "./iDictionary.js";
import { dictS2Letter, dictS3Letter, dictS4Letter, dictS5Letter }  from "./iDictionary.js";
import { dictT2Letter, dictT3Letter, dictT4Letter, dictT5Letter }  from "./iDictionary.js";
import { dictU2Letter, dictU3Letter, dictU4Letter, dictU5Letter }  from "./iDictionary.js";
import { dictV2Letter, dictV3Letter, dictV4Letter, dictV5Letter }  from "./iDictionary.js";
import { dictW2Letter, dictW3Letter, dictW4Letter, dictW5Letter }  from "./iDictionary.js";
import { dictX2Letter, dictX3Letter, dictX4Letter, dictX5Letter }  from "./iDictionary.js";
import { dictY2Letter, dictY3Letter, dictY4Letter, dictY5Letter }  from "./iDictionary.js";
import { dictZ2Letter, dictZ3Letter, dictZ4Letter, dictZ5Letter }  from "./iDictionary.js";

// console.log("game start");

//
// online buttons setup
//
const toggleDisplay = (element) => {
    if(element.style.display == "none")
    {
        element.style.display = "flex";
    }
    else{
        element.style.display = "none";
    }
}
const onlineBtns = document.getElementById("online-buttons");
const onlineJoinDiv = document.getElementById("online-join");
const onlineRoomInfo = document.getElementById("online-room-info");
toggleDisplay(onlineJoinDiv);
toggleDisplay(onlineRoomInfo);
const joinNameInput = document.getElementById("join-name");
const joinExitButton = document.getElementById("join-form-exit")
const roomExitButton = document.getElementById("room-info-exit")

const onlineJoinForm = document.getElementById("online-join-form");
const btnJoinRoom = document.getElementById("btn-join");
const btnCreateRoom = document.getElementById("btn-create");
const roomCodeText = document.getElementById("room-code-text");

//
// Tile array setup
//
const tileArray = [];
const tile_A1 = document.getElementById("A1");
const tile_A2 = document.getElementById("A2");
const tile_A3 = document.getElementById("A3");
const tile_A4 = document.getElementById("A4");
const tile_A5 = document.getElementById("A5");
const tile_B1 = document.getElementById("B1");
const tile_B2 = document.getElementById("B2");
const tile_B3 = document.getElementById("B3");
const tile_B4 = document.getElementById("B4");
const tile_B5 = document.getElementById("B5");
const tile_C1 = document.getElementById("C1");
const tile_C2 = document.getElementById("C2");
const tile_C3 = document.getElementById("C3");
const tile_C4 = document.getElementById("C4");
const tile_C5 = document.getElementById("C5");
const tile_D1 = document.getElementById("D1");
const tile_D2 = document.getElementById("D2");
const tile_D3 = document.getElementById("D3");
const tile_D4 = document.getElementById("D4");
const tile_D5 = document.getElementById("D5");
const tile_E1 = document.getElementById("E1");
const tile_E2 = document.getElementById("E2");
const tile_E3 = document.getElementById("E3");
const tile_E4 = document.getElementById("E4");
const tile_E5 = document.getElementById("E5");
tileArray.push(tile_A1, tile_A2, tile_A3, tile_A4, tile_A5, tile_B1, tile_B2, tile_B3, tile_B4, tile_B5, tile_C1, tile_C2, tile_C3, tile_C4, tile_C5, tile_D1, tile_D2, tile_D3, tile_D4, tile_D5, tile_E1, tile_E2, tile_E3, tile_E4, tile_E5);
let charArray = ["","","","","","","","","","","","","","","","","","","","","","","","",""]

// keyboard
const keyboardQ = document.getElementById("keyQ");
const keyboardW = document.getElementById("keyW");
const keyboardE = document.getElementById("keyE");
const keyboardR = document.getElementById("keyR");
const keyboardT = document.getElementById("keyT");
const keyboardY = document.getElementById("keyY");
const keyboardU = document.getElementById("keyU");
const keyboardI = document.getElementById("keyI");
const keyboardO = document.getElementById("keyO");
const keyboardP = document.getElementById("keyP");
const keyboardA = document.getElementById("keyA");
const keyboardS = document.getElementById("keyS");
const keyboardD = document.getElementById("keyD");
const keyboardF = document.getElementById("keyF");
const keyboardG = document.getElementById("keyG");
const keyboardH = document.getElementById("keyH");
const keyboardJ = document.getElementById("keyJ");
const keyboardK = document.getElementById("keyK");
const keyboardL = document.getElementById("keyL");
const keyboardZ = document.getElementById("keyZ");
const keyboardX = document.getElementById("keyX");
const keyboardC = document.getElementById("keyC");
const keyboardV = document.getElementById("keyV");
const keyboardB = document.getElementById("keyB");
const keyboardN = document.getElementById("keyN");
const keyboardM = document.getElementById("keyM");
const keyboardKeys = [keyboardA,keyboardB,keyboardC,keyboardD,keyboardE,keyboardF,keyboardG, keyboardH, keyboardI, keyboardJ,keyboardK, keyboardL, keyboardM, keyboardN, keyboardO, keyboardP, keyboardQ, keyboardR, keyboardS, keyboardT, keyboardU, keyboardV, keyboardW, keyboardX, keyboardY, keyboardZ];

// other elements
const player1Text = document.getElementById("player_1_text");
const player2Text = document.getElementById("player_2_text");
const keyboardBackspace = document.getElementById("keyboard_backspace")
const keyboardEnter = document.getElementById("keyboard_enter")
const gameLog = document.getElementById("game_log");

//
// game setup
//
let myName = "";

let playerTurn = 1; // player1/ player2
let player1Points = 0;
let player2Points = 0;

let moveMade = true;
let lastTileUsed = null;

const resetMove = () => {
    moveMade = false;
    lastTileUsed = null;    
}
resetMove();

//
// functions + listeners
//

btnJoinRoom.addEventListener("click", () => {
    console.log("join room click");
    
    toggleDisplay(onlineBtns);
    toggleDisplay(onlineJoinDiv);
})

btnCreateRoom.addEventListener("click", () => {
    console.log("create room click");

    toggleDisplay(onlineBtns);
    toggleDisplay(onlineRoomInfo);

    // make a new room with sockets
    //
})

onlineJoinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let inputName = joinNameInput.value;
    if (inputName && inputName.length == 6) {
        console.log(`join room:${inputName}`);

        socket.emit('join room', inputName); // for sockets 
        joinNameInput.value = '';
    }
    else{
        console.log("Name needs to be 6 letters");
    }
});
joinExitButton.addEventListener("click", () => {
    joinNameInput.value = '';
    toggleDisplay(onlineJoinDiv);
    toggleDisplay(onlineBtns);
})
roomExitButton.addEventListener("click", () => {
    joinNameInput.value = '';
    toggleDisplay(onlineRoomInfo);
    toggleDisplay(onlineBtns);
})


// socket server responses
socket.on('player name', (id) => {
    myName = id;
    console.log(`Me: ${myName}`);
});





//
// game code
//

// setting up button click on each tile
for(let i = 0; i < tileArray.length; i++){   
    // tileArray[i].tabIndex = 0;

    // add on-click to each
    tileArray[i].addEventListener("click", () => {
        //console.log(`char = "${charArray[i]}"`);

        //testing here
        if(tileArray[i].classList.contains("locked")){
            //console.log("locked detected at");
            //console.log(tileArray[i]);
        }
        else{
            for(let j = 0; j < tileArray.length; j++){

                if(tileArray[j].classList.contains("locked") == false){
                    // reset bg colour of other tiles
                    tileArray[j].style.backgroundColor = "#b2b7bb";
                    charArray[j] = "";   
                    
                    //tileArray[j].tabIndex = 1;                
                    if(lastTileUsed != null){    
                                   
                        lastTileUsed.innerHTML = (`<p></p>`);                    
                    }
                    resetMove();
                }
            }
        // set clicked tile bg colour
        tileArray[i].style.backgroundColor = "#667f9d";
        tileArray[i].tabIndex = 0;
        
        // set this tile to last used
        lastTileUsed = tileArray[i]; 

        lastTileUsed.focus();    
        //console.log(lastTileUsed)
        //console.log(document.activeElement);

        } 
    })

    // add keydown to each
    tileArray[i].addEventListener("keydown", (logKey) => {
        // console.log(logKey.key); // see key press
        
        if(tileArray[i].classList.contains("locked"))
        {
            
        } 
        else{
            var charCode = logKey.keyCode;
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            {
                tileArray[i].innerHTML = (`<p>${(logKey.key).toLocaleUpperCase()}</p>`);
                tileArray[i].style.backgroundColor = "#667f9d";
                lastTileUsed = tileArray[i];
                lastTileUsed.focus();    
                moveMade = true;    
                
                charArray[i] = logKey.key.toLocaleUpperCase();
            }   
            else if(logKey.keyCode == 8){
                //tileArray[i].innerHTML = (`<p></p>`);
                if(lastTileUsed != null){
                    // reset colour to normal
                    tileArray[i].innerHTML = (`<p></p>`);
                    charArray[i] = "";


                    lastTileUsed.style.backgroundColor = "#b2b7bb";
                    lastTileUsed.tabIndex = 1;                    
                    resetMove();          
                } 
            } 
        }
    })
        
}

// listen for enter keypress wherever the user is on screen
window.addEventListener("keypress", (logKey) => {    
    if (logKey.key == "Enter"){
        // console.log("enter");
        if(moveMade == true){
            endTurn();
        }           
    }
})

// setup js keyboard enter and back buttons
keyboardEnter.addEventListener("click", () => {
    // code same as enter key press
    if(moveMade == true){
        endTurn();
    }
})
keyboardBackspace.addEventListener("click", () => {
    // code same as backspace key press
    if(lastTileUsed != null){
        lastTileUsed.innerHTML = (`<p></p>`)
        lastTileUsed.style.backgroundColor = "#b2b7bb";
        lastTileUsed.tabIndex = 1;                    
        resetMove();          
    } 
})
// set up js keyboard keys
for (let i = 0; i< keyboardKeys.length; i++){
    keyboardKeys[i].addEventListener("click", () => {
        let keyVal = keyboardKeys[i].innerText;

        if(lastTileUsed != null){
            console.log(`key press ${keyVal}`);            
            lastTileUsed.innerHTML = (`<p>${(keyVal).toLocaleUpperCase()}</p>`);
            lastTileUsed.style.backgroundColor = "#667f9d";
            lastTileUsed.focus();  
            moveMade = true;   
            
            //console.log(tileArray)

            switch(lastTileUsed.id)
            {
                case "A1":
                    charArray[0] = keyVal.toLocaleUpperCase();
                    break;
                case "A2":
                    charArray[1] = keyVal.toLocaleUpperCase();
                    break;
                case "A3":
                    charArray[2] = keyVal.toLocaleUpperCase();
                    break;
                case "A4":
                    charArray[3] = keyVal.toLocaleUpperCase();
                    break;
                case "A5":
                    charArray[4] = keyVal.toLocaleUpperCase();
                    break;
                case "B1":
                    charArray[5] = keyVal.toLocaleUpperCase();
                    break;
                case "B2":
                    charArray[6] = keyVal.toLocaleUpperCase();
                    break;
                case "B3":
                    charArray[7] = keyVal.toLocaleUpperCase();
                    break;
                case "B4":
                    charArray[8] = keyVal.toLocaleUpperCase();
                    break;
                case "B5":
                    charArray[9] = keyVal.toLocaleUpperCase();
                    break;
                case "C1":
                    charArray[10] = keyVal.toLocaleUpperCase();
                    break;
                case "C2":
                    charArray[11] = keyVal.toLocaleUpperCase();
                    break;
                case "C3":
                    charArray[12] = keyVal.toLocaleUpperCase();
                    break;
                case "C4":
                    charArray[13] = keyVal.toLocaleUpperCase();
                    break;
                case "C5":
                    charArray[14] = keyVal.toLocaleUpperCase();
                    break;
                case "D1":
                    charArray[15] = keyVal.toLocaleUpperCase();
                    break;
                case "D2":
                    charArray[16] = keyVal.toLocaleUpperCase();
                    break;
                case "D3":
                    charArray[17] = keyVal.toLocaleUpperCase();
                    break;
                case "D4":
                    charArray[18] = keyVal.toLocaleUpperCase();
                    break;
                case "D5":
                    charArray[19] = keyVal.toLocaleUpperCase();
                    break;
                case "E1":
                    charArray[20] = keyVal.toLocaleUpperCase();
                    break;
                case "E2":
                    charArray[21] = keyVal.toLocaleUpperCase();
                    break;
                case "E3":
                    charArray[22] = keyVal.toLocaleUpperCase();
                    break;
                case "E4":
                    charArray[23] = keyVal.toLocaleUpperCase();
                    break;
                case "E5":
                    charArray[24] = keyVal.toLocaleUpperCase();
                    break;

                default: console.log("ERROR in ")

            }
            // console.log(charArray);
        }
    })
}

const endTurn = () => {
    if(moveMade == true && lastTileUsed != null){

        // perform check against each tile :/
        switch(lastTileUsed)
        {   
            // ROW A
            case tileArray[0]:
                tile_A1Check();
            break;
            case tileArray[1]:
                tile_A2Check();
            break;
            case tileArray[2]:
                tile_A3Check();
            break;
            case tileArray[3]:
                tile_A4Check();
            break;
            case tileArray[4]:
                tile_A5Check();
            break;
            // ROW B
            case tileArray[5]:
                tile_B1Check();
            break;
            case tileArray[6]:
                tile_B2Check();
            break;
            case tileArray[7]:
                tile_B3Check();
            break;
            case tileArray[8]:
                tile_B4Check();
            break;
            case tileArray[9]:
                tile_B5Check();
            break;
            // ROW C
            case tileArray[10]:
                tile_C1Check();
            break;
            case tileArray[11]:
                tile_C2Check();
            break;
            case tileArray[12]:
                tile_C3Check();
            break;
            case tileArray[13]:
                tile_C4Check();
            break;
            case tileArray[14]:
                tile_C5Check();
            break;
            // ROW D
            case tileArray[15]:
                tile_D1Check();
            break;
            case tileArray[16]:
                tile_D2Check();
            break;
            case tileArray[17]:
                tile_D3Check();
            break;
            case tileArray[18]:
                tile_D4Check();
            break;
            case tileArray[19]:
                tile_D5Check();
            break;
            // ROW E
            case tileArray[20]:
                tile_E1Check();
            break;
            case tileArray[21]:
                tile_E2Check();
            break;
            case tileArray[22]:
                tile_E3Check();
            break;
            case tileArray[23]:
                tile_E4Check();
            break;
            case tileArray[24]:
                tile_E5Check();
            break;

            default:
                // nothing
                console.log("tile not supported yet or ERROR")
        }

        if(playerTurn == 1)
        {
            playerTurn = 2;
            player2Text.style.color = "red";      
            player2Text.style.border = "2px solid red";   
            player1Text.style.border = "2px solid rgb(248, 208, 134)";  
        }
        else{
            playerTurn = 1;
            player1Text.style.color = "blue";                     
            player1Text.style.border = "2px solid blue";   
            player2Text.style.border = "2px solid rgb(248, 208, 134)";     

        }        
        lastTileUsed.style.backgroundColor ="#002a5c";
        lastTileUsed.style.color = "white";
        lastTileUsed.classList.add("locked");        


        resetMove();    
        
        //console.log(charArray); // see the new grid of letters
    }  
}

const checkString = (newChar, inputStr) => {

    let inputLC = inputStr.toLowerCase();

    // code has been collapsed - use arrow to see
    switch(newChar)
    {
        case "A":
            switch(inputStr.length){
                case 2:
                    //console.log("case 2")
                    for(const entry of dictA2Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            // console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
                case 3:
                    //console.log("case 3")
                    for(const entry of dictA3Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            // console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
                case 4:
                    //console.log("case 4")
                    for(const entry of dictA4Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            // console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
                case 5:
                    //console.log("case 5")
                    for(const entry of dictA5Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            // console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
            }
        break;

        case "B": 
        switch(inputStr.length){
            case 2:
                for(const entry of dictB2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictB3Letter)
                {
                    //console.log(entry);                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictB4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictB5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
            // for(const entry of dictIncludesB)
            // {                
            //     if(inputStr == entry){
            //         logWord(inputStr);
            //         console.log(`${inputStr} is a match!`);
            //     }
            //     else{                   
            //     }
            // }

        break;

        case "C":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictC2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictC3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictC4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictC5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "D":           
            switch(inputStr.length){
            case 2:
                for(const entry of dictD2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictD3Letter)
                {                      
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictD4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictD5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "E":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictE2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictE3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictE4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictE5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "F":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictF2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictF3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictF4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictF5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "G":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictG2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictG3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictG4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictG5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "H":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictH2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictH3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictH4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictH5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "I":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictI2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictI3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictI4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictI5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "J":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictJ2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictJ3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictJ4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictJ5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "K":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictK2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictK3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictK4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictK5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "L":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictL2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictL3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictL4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictL5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "M":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictM2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictM3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictM4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictM5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "N":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictN2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictN3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictN4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictN5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "O":            
        switch(inputStr.length){
            case 2:
                for(const entry of dictO2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictO3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictO4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictO5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "P":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictP2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictP3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictP4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictP5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "Q":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictQ2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictQ3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictQ4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictQ5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "R":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictR2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictR3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictR4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictR5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "S":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictS2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictS3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictS4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictS5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "T":            
        switch(inputStr.length){
            case 2:
                for(const entry of dictT2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictT3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictT4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictT5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "U":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictU2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictU3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictU4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictU5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "V":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictV2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictV3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictV4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictV5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "W":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictW2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictW3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictW4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictW5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "X":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictX2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictX3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictX4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictX5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "Y":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictY2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictY3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictY4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictY5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        case "Z":           
        switch(inputStr.length){
            case 2:
                for(const entry of dictZ2Letter)
                {                       
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 3:
                for(const entry of dictZ3Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 4:
                for(const entry of dictZ4Letter)
                {                        
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
            case 5:
                for(const entry of dictZ5Letter)
                {                    
                    if(inputLC == entry){
                        logWord(inputStr);
                        // console.log(`${inputStr} is a match!`);
                    }
                }
                break;
        }
        break;
        default:
        // nothing yet
        console.log(`letter ${newChar} not included in dictionary/search yet`);
    }
}

const logWord = (word) => {

    // include points in html

    let newLI = document.createElement("li");

    let player = "";
    if(playerTurn == 1)
    {        
        player = "Player 1";
        newLI.style.color = "blue";
        player1Points += word.length;
        player1Text.innerText =  (`Player 1: ${player1Points}`); 
    }
    else{
        player = "Player 2";
        newLI.style.color = "red";
        player2Points += word.length;
        player2Text.innerText =  (`Player 2: ${player2Points}`); 
    }    
    newLI.innerText = (`${player} made ${word} - ${word.length} points`);
    gameLog.prepend(newLI);
}


// tile checks
// all 25 of em
// Hopefully i can find a more effient way of getting these down
// right now this section is a real eyesore

// ROW A
const tile_A1Check = () => {    
    let inputArray = ""; // start index = 0
    // left <-> right // line indexes = 0,1,2,3,4
    inputArray = [charArray[0], charArray[1], charArray[2], charArray[3], charArray[4]];
    createChecks(inputArray);
    // topLeft <\> bottomRight // line indexes = 0,6,12,18,24
    inputArray = [charArray[0], charArray[6], charArray[12], charArray[18], charArray[24]];
    createChecks(inputArray);
    // top ^-V bottom // line indexes = 0,5,10,15,20
    inputArray = [charArray[0], charArray[5], charArray[10], charArray[15], charArray[20]];
    createChecks(inputArray);
    // diag /
}
const tile_A2Check = () => {    
    let inputArray = ""; // start index = 1
    // left right - line indexes = 1,2,3,4
    inputArray = [charArray[1], charArray[2], charArray[3], charArray[4]];
    createChecks(inputArray);
    // 1,0
    inputArray = [charArray[1], charArray[0]];
    createChecks(inputArray);  
    // 0,1,2
    inputArray = [charArray[0],charArray[1],charArray[2]];
    strictCheck(inputArray);
    // 0,1,2,3
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3]];
    strictCheck(inputArray);
    // 0,1,2,3,4
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(inputArray);

    // diag \ - line indexes = 1,7,13,19
    inputArray = [charArray[1], charArray[7], charArray[13], charArray[19]];
    createChecks(inputArray);
     // up down - line indexes = 1,6,11,16,21
    inputArray = [charArray[1], charArray[6], charArray[11], charArray[16], charArray[21]];
    createChecks(inputArray);
    // diag / - line indexes = 1,5
    inputArray = [charArray[1], charArray[5]];
    createChecks(inputArray);
}
const tile_A3Check = () => {
    let inputArray = ""; // start index = 2
    // left right
    inputArray = [charArray[2], charArray[3], charArray[4]];
    createChecks(inputArray);
    inputArray = [charArray[2], charArray[1], charArray[0]];
    createChecks(inputArray);

    inputArray = [charArray[1],charArray[2],charArray[3]];
    strictCheck(inputArray);
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3]];
    strictCheck(inputArray);
    inputArray = [charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(inputArray);
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(inputArray);

    // diag \
    inputArray = [charArray[2], charArray[8], charArray[14]];
    createChecks(inputArray);
    // up down
    inputArray = [charArray[2], charArray[7], charArray[12], charArray[17], charArray[22]];
    createChecks(inputArray);
    // diag /
    inputArray = [charArray[2], charArray[6], charArray[10]];
    createChecks(inputArray);
}
const tile_A4Check = () => {
    let inputArray = ""; // start index = 3
    // left right - line indexes = 0,1,2,3
    inputArray = [charArray[3], charArray[2], charArray[1], charArray[0]];
    createChecks(inputArray);
    // 3,4
    inputArray = [charArray[3], charArray[4]];
    createChecks(inputArray);
    // 2,3,4
    inputArray = [charArray[2],charArray[3],charArray[4]];
    strictCheck(inputArray);
    // 1,2,3,4
    inputArray = [charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(inputArray);
    // 0,1,2,3,4
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(inputArray);

    // diag \ - line indexes = 3,9
    inputArray = [charArray[3], charArray[9]];
    createChecks(inputArray);
     // up down - line indexes = 3,8,13,18,23
    inputArray = [charArray[3], charArray[8], charArray[13], charArray[18], charArray[23]];
    createChecks(inputArray);
    // diag / - line indexes = 3,7,11,15
    inputArray = [charArray[3], charArray[7], charArray[11], charArray[15]];
    createChecks(inputArray);
}
const tile_A5Check = () => {
    let inputArray = ""; // start index = 4
    // left right - line indexes = 4,3,2,1,0
    inputArray = [charArray[4], charArray[3], charArray[2], charArray[1], charArray[0]];
    createChecks(inputArray);
    // diag \

    // up down - line indexes = 4,9,14,19,24
    inputArray = [charArray[4], charArray[9], charArray[14], charArray[19], charArray[24]];
    createChecks(inputArray);
    // diag / - line indexes = 4,8,12,16,20
    inputArray = [charArray[4], charArray[8], charArray[12], charArray[16], charArray[20]];
    createChecks(inputArray);
}

// ROW B
const tile_B1Check = () => {
    let inputArray = ""; // start index = 5
    // left right - 5,6,7,8,9
    inputArray = [charArray[5], charArray[6], charArray[7], charArray[8], charArray[9]];
    createChecks(inputArray);
    // diag \ 5,11,17,23
    inputArray = [charArray[5], charArray[6], charArray[7], charArray[8], charArray[9]];
    createChecks(inputArray);
    // up down - 5,10,15,20
    inputArray = [charArray[5], charArray[10], charArray[15], charArray[20]];
    createChecks(inputArray);
    // 5,0
    inputArray = [charArray[5], charArray[0]];
    createChecks(inputArray);
    // 0,5,10
    inputArray = [charArray[0],charArray[5],charArray[10]];
    strictCheck(inputArray);
    // 0,5,10,15
    inputArray = [charArray[0],charArray[5],charArray[10],charArray[15]];
    strictCheck(inputArray);
    //0,5,10,15,20
    inputArray = [charArray[0],charArray[5],charArray[10],charArray[15],charArray[20]];
    strictCheck(inputArray);

    // diag /
    inputArray = [charArray[5], charArray[1]];
    createChecks(inputArray);
    
}
const tile_B2Check = () => {
    let inputArray = ""; // start index = 6
    // left right
    inputArray = [charArray[6], charArray[5]];
    createChecks(inputArray);
    inputArray = [charArray[6], charArray[7],charArray[8],charArray[9]];
    createChecks(inputArray);   

    inputArray = [charArray[5],charArray[6],charArray[7]];
    strictCheck(inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8]];
    strictCheck(inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8],charArray[9]];
    strictCheck(inputArray);

    // diag \
    inputArray = [charArray[6], charArray[12],charArray[18],charArray[24]];
    createChecks(inputArray);
    inputArray = [charArray[6], charArray[0]];
    createChecks(inputArray);

    inputArray = [charArray[0],charArray[6],charArray[12]];
    strictCheck(inputArray);
    inputArray = [charArray[0],charArray[6],charArray[12],charArray[18]];
    strictCheck(inputArray);
    inputArray = [charArray[0],charArray[6],charArray[12],charArray[18],charArray[24]];
    strictCheck(inputArray);

    // up down
    inputArray = [charArray[6], charArray[11],charArray[16],charArray[21]];
    createChecks(inputArray);
    inputArray = [charArray[6], charArray[1]];
    createChecks(inputArray);

    inputArray = [charArray[1],charArray[6],charArray[11]];
    strictCheck(inputArray);
    inputArray = [charArray[1],charArray[6],charArray[11],charArray[16]];
    strictCheck(inputArray);
    inputArray = [charArray[1],charArray[6],charArray[11],charArray[16],charArray[21]];
    strictCheck(inputArray);

    // diag /
    inputArray = [charArray[6],charArray[2]];
    createChecks(inputArray);
    inputArray = [charArray[6],charArray[10]];
    createChecks(inputArray);
    inputArray = [charArray[2],charArray[6],charArray[10]];
    strictCheck(inputArray);
}
const tile_B3Check = () => {
    let inputArray = "";
    // left right
    inputArray = [charArray[7],charArray[6],charArray[5]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[8],charArray[9]];
    createChecks(inputArray);

    inputArray = [charArray[6],charArray[7],charArray[8]];    
    strictCheck(inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8]];
    strictCheck(inputArray);
    inputArray = [charArray[6],charArray[7],charArray[8],charArray[9]];
    strictCheck(inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8],charArray[9]];
    strictCheck(inputArray);

    // diag \
    inputArray = [charArray[7],charArray[13],charArray[19]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[1]];
    createChecks(inputArray);

    inputArray = [charArray[1],charArray[7],charArray[13]];
    strictCheck(inputArray);
    inputArray = [charArray[1],charArray[7],charArray[13],charArray[19]];
    strictCheck(inputArray);

    // up down
    inputArray = [charArray[7],charArray[2]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[12],charArray[17],charArray[22]];
    createChecks(inputArray);
    
    inputArray = [charArray[2],charArray[7],charArray[12]];    
    strictCheck(inputArray);
    inputArray = [charArray[2],charArray[7],charArray[12],charArray[17]];
    strictCheck(inputArray);
    inputArray = [charArray[2],charArray[7],charArray[12],charArray[17],charArray[22]];
    strictCheck(inputArray);

    // diag /

    inputArray = [charArray[7],charArray[3]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[11],charArray[15]];
    createChecks(inputArray);
    
    inputArray = [charArray[3],charArray[7],charArray[11]];    
    strictCheck(inputArray);
    inputArray = [charArray[3],charArray[7],charArray[11],charArray[15]];
    strictCheck(inputArray);


}
// trying to reduce code by not using inputArray
const tile_B4Check = () => {
    let inputArray = "";
    // left right
    // 8,9 - 8,7,6,5 --- 9,8,7 - 9,8,7,6 - 9,8,7,6,5
    createChecks([charArray[8],charArray[9]]);
    createChecks([charArray[8],charArray[7],charArray[6],charArray[5]]);     
    strictCheck([charArray[9],charArray[8],charArray[7]]);
    strictCheck([charArray[9],charArray[8],charArray[7],charArray[6]]);
    strictCheck([charArray[9],charArray[8],charArray[7],charArray[6],charArray[5]]);
    // diag \
    // 8,2 - 8,14 --- 2,8,14
    createChecks([charArray[8],charArray[2]]);
    createChecks([charArray[8],charArray[14]]);     
    strictCheck([charArray[2],charArray[8],charArray[14]]);
    // up down
    // 8,3 - 8,13,18,23 --- 3,8,13 - 3,8,13,18 - 3,8,13,18,23
    createChecks([charArray[8],charArray[3]]);
    createChecks([charArray[8],charArray[13],charArray[18],charArray[23]]);     
    strictCheck([charArray[3],charArray[8],charArray[13]]);
    strictCheck([charArray[3],charArray[8],charArray[13],charArray[18]]);
    strictCheck([charArray[3],charArray[8],charArray[13],charArray[18],charArray[23]]);
    // diag /
    // 8,4 - 8,12,16,20 --- 4,8,12 - 4,8,12,16 - 4,8,12,16,20
    createChecks([charArray[8],charArray[4]]);
    createChecks([charArray[8],charArray[12],charArray[16],charArray[20]]);     
    strictCheck([charArray[4],charArray[8],charArray[12]]);
    strictCheck([charArray[4],charArray[8],charArray[12],charArray[16]]);
    strictCheck([charArray[4],charArray[8],charArray[12],charArray[16],charArray[20]]);

}
const tile_B5Check = () => {
    let inputArray = "";
    // left right
    // 9,8,7,6,5
    createChecks([charArray[9],charArray[8],charArray[7],charArray[6],charArray[5]]);

    // diag \
    // 9,3
    createChecks([charArray[9],charArray[3]]);

    // up down
    // 9,4 - 9,14,19,24 --- 4,9,14 - 4,9,14,19 - 4,9,14,19,24
    createChecks([charArray[9],charArray[4]]);
    createChecks([charArray[9],charArray[14],charArray[19],charArray[24]]);
    strictCheck([charArray[4],charArray[9],charArray[14]]);
    strictCheck([charArray[4],charArray[9],charArray[14],charArray[19]]);
    strictCheck([charArray[4],charArray[9],charArray[14],charArray[19],charArray[24]]);

    // diag /
    // 9,13,17,21
    createChecks([charArray[9],charArray[13],charArray[17],charArray[21]]);
}

// ROW C
const tile_C1Check = () => {
    // left right
    // 10,11,12,13,14
    createChecks([charArray[10],charArray[11],charArray[12],charArray[13],charArray[14]]);

    // diag \
    // 10,16,22
    createChecks([charArray[10],charArray[16],charArray[22]],);

    // up down
    // 10,5,0 - 10,15,20 --- 5,10,15 - 0,5,10,15 5,10,15,20 - 0,5,10,15,20
    createChecks([charArray[10],charArray[5],charArray[0]]);
    createChecks([charArray[10],charArray[15],charArray[20]]);    

    strictCheck([charArray[5],charArray[10],charArray[15]]);
    strictCheck([charArray[5],charArray[10],charArray[15],charArray[20]]);
    strictCheck([charArray[0],charArray[5],charArray[10],charArray[15]]);
    strictCheck([charArray[0],charArray[5],charArray[10],charArray[15],charArray[20]]);

    // diag /
    // 10,6,2
    createChecks([charArray[10],charArray[6],charArray[2]]);
}
const tile_C2Check = () => {
    // 11
    // left right
    // 
    createChecks([charArray[11],charArray[10]]);
    createChecks([charArray[11],charArray[12],charArray[13],charArray[14]]);

    strictCheck([charArray[10],charArray[11],charArray[12]]);
    strictCheck([charArray[10],charArray[11],charArray[12],charArray[13]]);
    strictCheck([charArray[10],charArray[11],charArray[12],charArray[13],charArray[14]]);

    // diag \
    // 11,5 - 11,17,23 --- 5,11,17 - 5,11,17,23
    createChecks([charArray[11],charArray[5]],);
    createChecks([charArray[11],charArray[17],charArray[23]],);

    strictCheck([charArray[5],charArray[11],charArray[17]]);
    strictCheck([charArray[5],charArray[11],charArray[17],charArray[23]]);

    // up down
    // 11,6,1 - 1,16,21 --- 6,11,16 - 6,11,16,21 - 1,6,11,16 - 1,6,11,16,21
    createChecks([charArray[11],charArray[6],charArray[1]]);
    createChecks([charArray[11],charArray[16],charArray[21]]);    

    strictCheck([charArray[6],charArray[11],charArray[16]]);
    strictCheck([charArray[6],charArray[11],charArray[16],charArray[21]]);
    strictCheck([charArray[1],charArray[6],charArray[11],charArray[16]]);
    strictCheck([charArray[1],charArray[6],charArray[11],charArray[16],charArray[21]]);

    // diag /
    // 11,15 - 11,7,3 --- 15,11,7 - 15,11,7,3
    createChecks([charArray[11],charArray[15]]);
    createChecks([charArray[11],charArray[7],charArray[3]]);

    strictCheck([charArray[15],charArray[11],charArray[7]]);
    strictCheck([charArray[15],charArray[11],charArray[7],charArray[3]]);

}
const tile_C3Check = () => {
    // 12
    /// left right
    // 12,13,14 - 12,11,10 --- 11,12,13 - 10,11,12,13 - 11,12,13,14 - 10,11,12,13,14
    createChecks([charArray[12],charArray[13],charArray[14]]);
    createChecks([charArray[12],charArray[11],charArray[10]]);

    strictCheck([charArray[11],charArray[12],charArray[13]]);
    strictCheck([charArray[11],charArray[12],charArray[13],charArray[14]]);
    strictCheck([charArray[10],charArray[11],charArray[12],charArray[13]]); 
    strictCheck([charArray[10],charArray[11],charArray[12],charArray[13],charArray[14]]);

    // diag \
    // 12,18,24 - 12,6,0 --- 6,12,18 - 0,6,12,18 - 6,12,18,24 - 0,6,12,18,24
    createChecks([charArray[12],charArray[18],charArray[24]]);
    createChecks([charArray[12],charArray[6],charArray[0]]);

    strictCheck([charArray[6],charArray[12],charArray[18]]);
    strictCheck([charArray[6],charArray[12],charArray[18],charArray[24]]);
    strictCheck([charArray[0],charArray[6],charArray[12],charArray[18]]);    
    strictCheck([charArray[0],charArray[6],charArray[12],charArray[18],charArray[24]]);

    // up down
    // 12,7,2 - 12,17,22 --- 7,12,17 - 7,12,17,22 - 2,7,12,17 -  2,7,12,17,22
    createChecks([charArray[12],charArray[7],charArray[2]]);
    createChecks([charArray[12],charArray[17],charArray[2]]);

    strictCheck([charArray[7],charArray[12],charArray[17]]);
    strictCheck([charArray[7],charArray[12],charArray[17],charArray[22]]);
    strictCheck([charArray[2],charArray[7],charArray[12],charArray[17]]);    
    strictCheck([charArray[2],charArray[7],charArray[12],charArray[17],charArray[22]]);

    // diag /
    // 12,8,4 - 12,16,20 --- 8,12,16 - 8,12,16,20 - 4,8,12,16,20
    createChecks([charArray[12],charArray[8],charArray[4]]);
    createChecks([charArray[12],charArray[16],charArray[20]]);

    strictCheck([charArray[8],charArray[12],charArray[16]]);
    strictCheck([charArray[8],charArray[12],charArray[16],charArray[20]]);
    strictCheck([charArray[4],charArray[8],charArray[12],charArray[16]]);    
    strictCheck([charArray[4],charArray[8],charArray[12],charArray[16],charArray[20]]);
    
}
const tile_C4Check = () => {
    // 13
    // left right
    // 
    createChecks([charArray[13],charArray[14]]);
    createChecks([charArray[13],charArray[12],charArray[11],charArray[10]]);

    strictCheck([charArray[14],charArray[13],charArray[12]]);
    strictCheck([charArray[14],charArray[13],charArray[12],charArray[11]]);
    strictCheck([charArray[14],charArray[13],charArray[12],charArray[11],charArray[10]]);

    // diag \
    // 
    createChecks([charArray[13],charArray[19]],);
    createChecks([charArray[13],charArray[7],charArray[1]],);

    strictCheck([charArray[19],charArray[13],charArray[7]]);
    strictCheck([charArray[19],charArray[13],charArray[7],charArray[1]]);

    // up down
    // 
    createChecks([charArray[13],charArray[8],charArray[3]]);
    createChecks([charArray[13],charArray[18],charArray[23]]);    

    strictCheck([charArray[8],charArray[13],charArray[18]]);
    strictCheck([charArray[8],charArray[13],charArray[18],charArray[23]]);
    strictCheck([charArray[3],charArray[8],charArray[13],charArray[18]]);
    strictCheck([charArray[3],charArray[8],charArray[13],charArray[18],charArray[23]]);

    // diag /
    // 
    createChecks([charArray[13],charArray[9]]);
    createChecks([charArray[13],charArray[17],charArray[21]]);

    strictCheck([charArray[9],charArray[13],charArray[17]]);
    strictCheck([charArray[9],charArray[13],charArray[17],charArray[21]]);

}
const tile_C5Check = () => {
    // 14
    // left right
    // 
    createChecks([charArray[14],charArray[13],charArray[12],charArray[11],charArray[10]]);

    // diag \
    // 
    createChecks([charArray[14],charArray[8],charArray[2]]);

    // up down
    // 
    createChecks([charArray[14],charArray[9],charArray[4]]);
    createChecks([charArray[14],charArray[19],charArray[24]]);    

    strictCheck([charArray[9],charArray[14],charArray[19]]);
    strictCheck([charArray[9],charArray[14],charArray[19],charArray[24]]);
    strictCheck([charArray[4],charArray[9],charArray[14],charArray[19]]);
    strictCheck([charArray[4],charArray[9],charArray[14],charArray[19],charArray[24]]);

    // diag /
    //     
    createChecks([charArray[14],charArray[18],charArray[22]]);
}

// ROW D
const tile_D1Check = () => {
    // 15
    // left right
    // 15,16,17,18,19
    createChecks([charArray[15],charArray[16],charArray[17],charArray[18],charArray[19]]);

    // diag \
    // 
    createChecks([charArray[15],charArray[21]],);

    // up down
    // 
    createChecks([charArray[15],charArray[20]]);
    createChecks([charArray[15],charArray[10],charArray[5],charArray[0]]);    

    strictCheck([charArray[20],charArray[15],charArray[10]]);
    strictCheck([charArray[20],charArray[15],charArray[10],charArray[5]]);
    strictCheck([charArray[20],charArray[15],charArray[10],charArray[5],charArray[0]]);

    // diag /
    // 
    createChecks([charArray[15],charArray[11],charArray[7],charArray[3]]);
}
const tile_D2Check = () => {
    // 16
    // left right
    createChecks([charArray[16],charArray[15]]);
    createChecks([charArray[16],charArray[17],charArray[18],charArray[19]]);

    strictCheck([charArray[15],charArray[16],charArray[17]]);
    strictCheck([charArray[15],charArray[16],charArray[17],charArray[18]]);
    strictCheck([charArray[15],charArray[16],charArray[17],charArray[18],charArray[19]]);

    // diag \
    createChecks([charArray[16],charArray[22]]);
    createChecks([charArray[16],charArray[10]]);
    strictCheck([charArray[10],charArray[16],charArray[22]]);

    // up down
    createChecks([charArray[16],charArray[21]]);
    createChecks([charArray[16],charArray[11],charArray[6],charArray[1]]);

    strictCheck([charArray[21],charArray[16],charArray[1]]);
    strictCheck([charArray[21],charArray[16],charArray[1],charArray[6]]);
    strictCheck([charArray[21],charArray[16],charArray[1],charArray[6],charArray[1]]);

    // diag /
    createChecks([charArray[16],charArray[20]]);
    createChecks([charArray[16],charArray[12],charArray[8],charArray[4]]);

    strictCheck([charArray[20],charArray[16],charArray[12]]);
    strictCheck([charArray[20],charArray[16],charArray[12],charArray[8]]);
    strictCheck([charArray[20],charArray[16],charArray[12],charArray[8],charArray[4]]);

}
const tile_D3Check = () => {
     // 17
    /// left right
   
    createChecks([charArray[17],charArray[18],charArray[19]]);
    createChecks([charArray[17],charArray[16],charArray[15]]);

    strictCheck([charArray[16],charArray[17],charArray[18]]);
    strictCheck([charArray[16],charArray[17],charArray[18],charArray[19]]);
    strictCheck([charArray[15],charArray[16],charArray[17],charArray[18]]); 
    strictCheck([charArray[15],charArray[16],charArray[17],charArray[18],charArray[19]]);

    // diag \
    createChecks([charArray[17],charArray[23]]);
    createChecks([charArray[17],charArray[11],charArray[5]]);

    strictCheck([charArray[23],charArray[17],charArray[11]]);
    strictCheck([charArray[23],charArray[17],charArray[1],charArray[5]]);

    // up down
    createChecks([charArray[17],charArray[22]]);
    createChecks([charArray[17],charArray[12],charArray[7],charArray[2]]);

    strictCheck([charArray[22],charArray[17],charArray[12]]);
    strictCheck([charArray[22],charArray[17],charArray[12],charArray[7]]); 
    strictCheck([charArray[22],charArray[17],charArray[12],charArray[7],charArray[2]]);

    // diag /
    createChecks([charArray[17],charArray[21]]);
    createChecks([charArray[17],charArray[13],charArray[9]]);

    strictCheck([charArray[21],charArray[17],charArray[13]]);
    strictCheck([charArray[21],charArray[17],charArray[13],charArray[9]]); 

}
const tile_D4Check = () => {
    // 18
    // left right
    createChecks([charArray[18],charArray[19]]);
    createChecks([charArray[18],charArray[17],charArray[16],charArray[15]]);

    strictCheck([charArray[19],charArray[18],charArray[17]]);
    strictCheck([charArray[19],charArray[18],charArray[17],charArray[16]]);
    strictCheck([charArray[19],charArray[18],charArray[17],charArray[16],charArray[15]]);

    // diag \
    createChecks([charArray[18],charArray[24]]);
    createChecks([charArray[18],charArray[12],charArray[6],charArray[0]]);

    strictCheck([charArray[24],charArray[18],charArray[12]]);
    strictCheck([charArray[24],charArray[18],charArray[12],charArray[6]]);
    strictCheck([charArray[24],charArray[18],charArray[12],charArray[6],charArray[0]]);

    // up down
    createChecks([charArray[18],charArray[23]]);
    createChecks([charArray[18],charArray[13],charArray[8],charArray[3]]);

    strictCheck([charArray[23],charArray[18],charArray[13]]);
    strictCheck([charArray[23],charArray[18],charArray[13],charArray[8]]);
    strictCheck([charArray[23],charArray[18],charArray[13],charArray[8],charArray[3]]);

    // diag /
    createChecks([charArray[18],charArray[14]]);
    createChecks([charArray[18],charArray[22]]);

    strictCheck([charArray[22],charArray[18],charArray[14]]);
}
const tile_D5Check = () => {
    // 19
    // left right
    createChecks([charArray[19],charArray[18],charArray[17],charArray[16],charArray[15]]);

    // diag \
    createChecks([charArray[19],charArray[13],charArray[7],charArray[1]]);

    // up down
    createChecks([charArray[19],charArray[24]]);
    createChecks([charArray[19],charArray[14],charArray[9],charArray[4]]);    

    strictCheck([charArray[24],charArray[19],charArray[14]]);
    strictCheck([charArray[24],charArray[19],charArray[14],charArray[9]]);
    strictCheck([charArray[24],charArray[19],charArray[14],charArray[9],charArray[4]]);

    // diag /
    createChecks([charArray[19],charArray[23]],);
}

// ROW E
const tile_E1Check = () => {
    // 20
    // left right
    createChecks([charArray[20],charArray[21],charArray[22],charArray[23],charArray[24]]);

    // diag \    

    // up down
    createChecks([charArray[20],charArray[15],charArray[10],charArray[5],charArray[0]]);    

    // diag /
    createChecks([charArray[20],charArray[16],charArray[12],charArray[8],charArray[4]]);
}
const tile_E2Check = () => {
    // 21
    // left right
    createChecks([charArray[21],charArray[20]]);
    createChecks([charArray[21],charArray[22],charArray[23],charArray[24]]);

    strictCheck([charArray[20],charArray[21],charArray[22]]);
    strictCheck([charArray[20],charArray[21],charArray[22],charArray[23]]);
    strictCheck([charArray[20],charArray[21],charArray[22],charArray[23],charArray[24]]);

    // diag \
    createChecks([charArray[21],charArray[15]]);

    // up down
    createChecks([charArray[21],charArray[16],charArray[11],charArray[6],charArray[1]]);

    // diag /
    createChecks([charArray[21],charArray[17],charArray[13],charArray[9]]);

}
const tile_E3Check = () => {
    // 22
    // left right
    createChecks([charArray[22],charArray[23]],charArray[24]);
    createChecks([charArray[22],charArray[21],charArray[20]]);

    strictCheck([charArray[21],charArray[22],charArray[23]]);
    strictCheck([charArray[21],charArray[22],charArray[23],charArray[24]]);
    strictCheck([charArray[20],charArray[21],charArray[22],charArray[23]]);
    strictCheck([charArray[20],charArray[21],charArray[22],charArray[23],charArray[24]]);

    // diag \
    createChecks([charArray[22],charArray[16],charArray[10]]);

    // up down
    createChecks([charArray[22],charArray[17],charArray[12],charArray[7],charArray[2]]);

    // diag /
    createChecks([charArray[22],charArray[18],charArray[14]]);
}
const tile_E4Check = () => {
    // 23
    // left right
    createChecks([charArray[23],charArray[24]]);
    createChecks([charArray[23],charArray[22],charArray[21],charArray[20]]);

    strictCheck([charArray[24],charArray[23],charArray[22]]);
    strictCheck([charArray[24],charArray[23],charArray[22],charArray[21]]);
    strictCheck([charArray[24],charArray[23],charArray[22],charArray[21],charArray[20]]);

    // diag \
    createChecks([charArray[23],charArray[17],charArray[11],charArray[5]]);

    // up down
    createChecks([charArray[23],charArray[18],charArray[13],charArray[8],charArray[3]]);

    // diag /
    createChecks([charArray[23],charArray[19]]);
}
const tile_E5Check = () => {
    // 23
    // left right
    createChecks([charArray[24],charArray[23],charArray[22],charArray[21],charArray[20]]);

    // diag \
    createChecks([charArray[24],charArray[18],charArray[12],charArray[6],charArray[0]]);

    // up down
    createChecks([charArray[24],charArray[19],charArray[14],charArray[9],charArray[4]]);

    // diag /
}


const createChecks = (lineChars) => {

    let input = "";

    switch(lineChars.length){
        case 2:
            // 2 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[1], input);
            }
            break;

        case 3:
            // 3 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[1], input);
                
                if(lineChars[2] != ""){
                    input = lineChars[0].concat(lineChars[1],lineChars[2]);
                    checkString(lineChars[0], input);
                    input = lineChars[2].concat(lineChars[1],lineChars[0]);
                    checkString(lineChars[2], input);                        
                }
            }            
            break;  

        case 4:
            // 4 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[1], input);
                
                if(lineChars[2] != ""){
                    input = lineChars[0].concat(lineChars[1],lineChars[2]);
                    checkString(lineChars[0], input);
                    input = lineChars[2].concat(lineChars[1],lineChars[0]);
                    checkString(lineChars[2], input);    
                    
                    if(lineChars[3] != ""){
                        input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3]);
                        checkString(lineChars[0], input);
                        input = lineChars[3].concat(lineChars[2],lineChars[1],lineChars[0]);
                        checkString(lineChars[3], input);                        
                    }
                }
            } 
            break;       
        case 5:
            // 5 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[1], input);
                
                if(lineChars[2] != ""){
                    input = lineChars[0].concat(lineChars[1],lineChars[2]);
                    checkString(lineChars[0], input);
                    input = lineChars[2].concat(lineChars[1],lineChars[0]);
                    checkString(lineChars[2], input);    
                    
                    if(lineChars[3] != ""){
                        input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3]);
                        checkString(lineChars[0], input);
                        input = lineChars[3].concat(lineChars[2],lineChars[1],lineChars[0]);
                        checkString(lineChars[3], input); 

                        if(lineChars[4] != ""){
                            input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3],lineChars[4]);
                            checkString(lineChars[0], input);
                            input = lineChars[4].concat(lineChars[3],lineChars[2],lineChars[1],lineChars[0]);
                            checkString(lineChars[4], input);                        
                        }                      
                    }
                }
            } 
            break;
        default:
            //
            console.log("issue detected")
            console.log(lineChars)
            console.log(lineChars.length)
    }
}


const strictCheck = (lineChars) => {

    // console.log(`line length: ${lineChars.length}`)
    //console.log(lineChars)

    let input = "";
    let missing = false;

    for(let i=0; i<lineChars.length; i++)
    {
        if (lineChars[i] == ""){
            missing = true
        }
    }
    //console.log(missing)

    if(missing != true)
    {
        switch (lineChars.length){
            case 1:                
                break;

            case 2:
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[1], input);
                break;
    
            case 3:
                input = lineChars[0].concat(lineChars[1],lineChars[2]);
                checkString(lineChars[0], input);
                input = lineChars[2].concat(lineChars[1],lineChars[0]);
                checkString(lineChars[2], input);
                break;
    
            case 4:
                input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3]);
                checkString(lineChars[0], input);
                input = lineChars[3].concat(lineChars[2],lineChars[1],lineChars[0]);
                checkString(lineChars[3], input);
                break;
            
            case 5:
                input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3],lineChars[4]);
                checkString(lineChars[0], input);
                input = lineChars[4].concat(lineChars[3],lineChars[2],lineChars[1],lineChars[0]);
                checkString(lineChars[4], input);
                break;
                                                        
            default:
                //
        }
    }
}









