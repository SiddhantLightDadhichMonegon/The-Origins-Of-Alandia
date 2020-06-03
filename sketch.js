var player;
var invisibleGround;
var gameState = 0;
var playerName,playerCharacter;
var game;
var xMultiplier = 0;
var platformGroup,obstacleGroup;
var platformY;

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  invisibleGround = createSprite(displayWidth/2 - 500,displayHeight-225,displayWidth*6,20);
  invisibleGround.x = invisibleGround.width/2;
  player = new Player(30,200);

  game = new Game();

  platformGroup = new Group();
  obstacleGroup = new Group();

}

function preload(){
  burntForestImage = loadImage("images/BurntForestImage.jpg");
}

function draw() {
  background(255);
  image(burntForestImage,0,0,displayWidth*4,displayHeight);  

  camera.position.x = player.sprite.x + 610;

  player.gravity(0.5);

  player.sprite.collide(invisibleGround);

  game.serve();

  text(mouseX+":"+mouseY,mouseX,mouseY);

  if(gameState === 1){
    drawSprites();
    game.name.hide();
    game.submit.hide();
    game.radio.hide();
    spawnPlatform();
    spawnObstacles();
    

   
    player.sprite.collide(platformGroup);

    player.sprite.collide(obstacleGroup);

    if(player.sprite.velocityX===0){
      player.sprite.velocityX = 5;
      console.log("Assigned velocity");
      console.log(gameState)
    }
    

  }


}

function keyPressed(){
    if(keyCode === UP_ARROW){
      player.sprite.velocityY = -10;
      // player.sprite.velocityX = 10;
      // camera.position.x = player.sprite.velocityX-5;
    }
}

// function keyReleased(){
//   if(keyCode === UP_ARROW){
//     player.sprite.velocityX = 5;
//     // camera.position.x = player.sprite.velocityX;
//   }
// }

function spawnObstacles(){
    if(frameCount%60===0){
      var obstacle = createSprite(player.sprite.x+displayWidth+random(5,80),platformY-15,30,30);

      obstacleGroup.add(obstacle);

      obstacle.lifetime = floor(displayWidth/4);
    }

}

function spawnPlatform(){
   if(frameCount%60 === 0){
      platformY =  random(displayHeight/2-250,invisibleGround.y-75)
      var platform = createSprite(player.sprite.x+displayWidth,platformY,150,20);

      platformGroup.add(platform);

      platform.lifetime = floor(displayWidth/4);

      
    }
}