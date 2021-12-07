var player
var wormGroup
var score=0

function preload(){
  swampImage = loadImage("Images/swamp.png")
  playerImage = loadImage("Images/hydro.png")
  wormImage = loadImage("Images/worm.png")
}
function setup() {
  createCanvas(1365,1800);
  
  swamp = createSprite(300,300)
  swamp.addImage(swampImage)
  swamp.scale = 2.5
  player = createSprite(80,550,40,40)
  player.addImage(playerImage)
  player.scale=0.2
  
  wormGroup = new Group()
}

function draw() {
  background("black");  
  
  stroke("red")
  noFill()
  ellipse(300,350,40,30)
  
  player.x = mouseX
  player.y = mouseY
  
  generateWorms()
  for(var i=0;i<wormGroup.length;i++){
    var temp = wormGroup.get(i);
    if(player.isTouching(temp)){
      temp.destroy();
      temp = null;
      score++;
    }
  }

  if(player.x<150 && player.x>90 && player.y<380 && player.y>320){
    text("No Cheating",200,200);
    player.x = 30;
    player.y = 30;
    score--;  
  }
  
 
  drawSprites()

  textSize(20);
  text("Worm destroyed: "+score,350,50)
}

function generateWorms(){
  if(frameCount%30===0){
  console.log(frameCount)
  var worm = createSprite(random(40,380),random(290,380),40,5)
  worm.addImage(wormImage)
  worm.scale = random(0.1,0.3);
  worm.shapeColor = "green";
  worm.velocityX = random(-4,4)
  worm.velocityY = random(-4,4)
  wormGroup.add(worm)
  }
}