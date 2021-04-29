var garden
var cat,catImg,catImg2,catImg3
var mouse,mouseImg,mouseImg2,mouseImg3

function preload() {
    //load the images here

    
catImg = loadImage("images/cat1.png");
catImg2 = loadImage("images/cat2.png");
catImg3 = loadImage("images/cat4.png");
gardenImg=loadImage("images/garden.png");
mouseImg = loadImage("images/mouse1.png");
mouseImg2 = loadImage("images/mouse2.png"); 
mouseImg3 = loadImage("images/mouse4.png"); 
}


function setup(){
    createCanvas(1000,800);
    keyPressed();
    //create tom and jerry sprites here
garden=createSprite(500,400,1000,800);
garden.addImage(gardenImg);

mouse = createSprite(200,630);
mouse.addImage(mouseImg);
mouse.scale = 0.1;

cat = createSprite(800,600);
cat.addImage(catImg);
cat.scale = 0.2;


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x <(cat.width - mouse.width)/2 )
    {
        cat.velocityX = 0;
        cat.addAnimation("cat4image",catImg3)
        cat.x = 300;
        cat.scale - 0.2;
        cat.changeAnimation("cat4image");
        mouse.addAnimation("mouse4image",mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouse4image");
    }

    drawSprites();
}


function keyPressed(){

    
  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
    
     cat.velocityX = -5;
     cat.addAnimation("catrunning",catImg2);
     cat.changeAnimation("catrunning");
 }

}
