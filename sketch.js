var database;
var form,game,player;
var playerCount;
var gameState=0;



function setup(){
 

  createCanvas(400,400);
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()
}

function draw(){
  
  
}


