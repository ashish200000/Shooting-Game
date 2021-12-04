var plane,planeImage;
var bgimage,bg;
var diamond,diamondImage,diamondGroup;
var star,starImage,starGroup;
var obstacle,obstacleImage,obstacleGroup;
var score = 0

function preload(){
bgImage = loadImage("BackgroundImage.png")
planeImage = loadImage("plane.png")
starImage = loadImage("Starimage.png")
diamondImage = loadImage("diamondimage.png")
obstacleImage = loadImage("obstacle.png")
}
function setup() {
  createCanvas(1000, 800);
 /* bg = createSprite(200,200)
 bg.addImage("bgImages",bgImage)
 */
 plane = createSprite(500,750,20,20)
 plane.addImage("planes",planeImage)

stargroup = new Group()
diamondGroup = new Group()
obstacleGroup = new Group()

}


function draw() {
  background(bgImage);

textSize(35)
fill("green")
text(score,205,150)
text("Score:",100,150)

if(plane.isTouching(starGroup)){
starGroup.destroyEach();
score +=1
}
if(plane.isTouching(diamondGroup)){
diamondGroup.destroyEach()
score +=10
}
if(plane.isTouching(obstacleGroup)){
  obstacleGroup.destroyEach()
  plane.destroy()
  textSize(30)
  fill("green")
  text("GAME OVER",200,200)
}

if(keyDown("LEFT_ARROW")){
  plane.x = plane.x-4
}
if(keyDown("RIGHT_ARROW")){
  plane.x = plane.x+4
}
if(frameCount % 60 == 0){
  star = createSprite(Math.round(random(10,900)),50,20,20);
  star.addImage("stars",starImage)
  star.velocityY = 5
  star.scale = 0.3
  starGroup.add(star)
}
if(frameCount % 95 == 0){
  obstacle= createSprite(Math.round(random(10,900)),50,20,20);
  obstacle.addImage("obstcel",obstacleImage)
  obstacle.velocityY = 5
  obstacle.scale = 0.6
  obstacleGroup.add(obstacle)
}

if(frameCount % 160 == 0){
  diamond = createSprite(Math.round(random(10,900)),50,20,20);
  diamond.addImage("diamonds",diamondImage)
  diamond.velocityY = 5
  diamond.scale = 0.06
  diamondGroup.add(diamond)
}



  drawSprites();
}