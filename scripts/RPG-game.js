let xp = 0;
let health = 100;
let gold = 0;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const locations = [{
  name: "town square",
  "button-text": ["go to store", "go to cave", "fight dragon"],
  "button functions": [goStore, goCave, fightDragon]},

{
  name: "store",
  "button-text":["buy 10 health (10 gold)", "buy weapon (30 gold)", "go to town square"],
  "button functions":[buyHealth, buyWeapon, goTown],
  text: "You enter the store"
}


]; 

//initialise buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


function update(location){
 button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText =  location["button text"][2];  
  text.innerText = location.text;
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
}


function goTown(){update(locations[0]);}

function goStore(){update(locations[1]);}


function goCave(){
  console.log("going to cave");
}



function fightDragon(){
  console.log("fighting dragon");
}

function buyHealth(){}
function buyWeapon(){}






