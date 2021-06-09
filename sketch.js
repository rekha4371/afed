var arthur,arthurImage,pete,peteImage,terrorBird,terrorBirdImage;
var wolf,wolfImage,grownUpPete,grownUpPeteImage,knightArthur,knightArthurImage;
var GKArthur,GKArthurImage,dragon,dragonImage,firstLevelBackgrond,firstLevelBackgrondImage;

function preload(){
arthurImage=loadImage("arthur.png");
peteImage=loadImage("pete.png");
grownUpPeteImage=loadImage("grown up pete.png");
knightArthurImage=loadImage("knight arthur.png")
GKArthurImage=loadImage("GK arthur.png")
wolfImage=loadImage("wolf.png")
terrorBirdImage=loadImage("terror bird.png")
dragonImage=loadImage("dragon.png")
firstLevelBackgrondImage=loadImage("first level background.png")
}
function setup() {

  createCanvas(600,300);
  firstLevelBackground=createSprite(800, 290, 50, 50);
  firstLevelBackground.addImage(firstLevelBackgrondImage)
  firstLevelBackground.velocityX=-2
  firstLevelBackground.scale=1.8

  player1 = createSprite(60,240);
  player1.addImage(GKArthurImage);
  player1.scale= 0.2;
}

function draw() {
  background("blue");  
  if(firstLevelBackground.x<0){
    firstLevelBackground.x= 500
  }
  drawSprites();
}