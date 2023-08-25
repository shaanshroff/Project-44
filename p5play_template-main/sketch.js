//variables
var bgImage;
var wall;
var player;
var playerImage

var playerScore = 0
var playerLife = 2
var gameState = "serve"

function preload(){
  bgImage = loadImage("Images/bg.jpeg")
 // playerImage = loadAnimation("Images/boyimage2.png","Images/boyimage.png")
  playerImage = loadImage("Images/boyimage.png")
}

function setup() {
  createCanvas(800,600);
  wall = createSprite(750,305,50,600)
  wall.shapeColor = "#3b581d"
  player = createSprite(100,400,80,200)
  player.addImage("player",playerImage)
  player.scale = 0.5
  playerScore.shapeColor = "#Oc51fa"
}

function draw() 
{
  background(bgImage);
  if (keyDown("up")){
    player.y-=4
  }
  if (keyDown("down")){
    player.y+=4
  }

  text(playerScore, 575,20)
  text(playerLife, 575,50)

  drawSprites()
}




