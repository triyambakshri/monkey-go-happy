
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisible;




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
  invisible = createSprite(400,350,900,10);
  invisible.x = ground.width/2;
  
  
}


function draw() {
background("white");
  
 
    
    if(ground.x<0) {
      ground.x = ground.width/2
      ground.visible = false
    }
    
    if(invisible.x<0){
      invisible.x = ground.width/2
    }
  
  
  if (keyDown("space")&&monkey.y>=250){
    monkey.velocityY = -10;
    
    
    
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  console.log(monkey.y);
  monkey.collide(invisible);
  spawnbanana();
  spawnObstacles();
  drawSprites();
}


function spawnObstacles(){
  if (frameCount%95===0){
    obstacle = createSprite(500,340,10,20);
    obstacle.velocityX = -5;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle)
  }
}
function spawnbanana(){
  if (frameCount%110===0){
    banana = createSprite(500,240,10,20);
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.lifetime = 300;
    FoodGroup.add(banana);
  }
}



