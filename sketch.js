var ground,bg,bgimg,gameoverimg,p,pcimg,pimg,pballimg,o,oimg,og;

function preload(){
 
  bgimg=loadImage("bg.jpg")
  pimg=loadAnimation("pikachu.png")
  pballimg=loadImage("pball.png")
  pcimg=loadAnimation("pc.png")
  gameoverimg=loadImage("gameOver.png")
}

function setup(){
  createCanvas(800,400)
  bg=createSprite(500,100,800,800)
  bg.addImage(bgimg)
  
 
  ground=createSprite(400,380,800,10)
  ground.visible=false;
   p=createSprite(180,380,20,20)
  p.addAnimation("p",pimg)
  p.addAnimation("pc",pcimg)
  p.scale=0.3
  
  gameover=createSprite(280,100,50,60)
  gameover.addImage(gameoverimg)
  gameover.visible=false
  og=new Group()
}

function draw(){
  background("blue");
  

   if(keyDown("up")){
     p.velocityY=-2
   }
   if(keyDown("down")){
     p.y=p.y+2
   }
   if(keyDown("right")){
     p.x=p.x+2
   }
   if(keyDown("left")){
     p.x=p.x-2
   }
  
   p.velocityY=p.velocityY+0.1
   
   if(og.isTouching(p)){ 
     p.changeAnimation("pc",pcimg)
     gameover.visible=true
     og.setLifetimeEach(0)
   }
   spawnobstacles()
   p.collide(ground) 
  drawSprites()
}

function spawnobstacles(){
  if(frameCount%100 ===0){
    o=createSprite(Math.round(random(50,500)),Math.round(random(0,500)),20,20)
    o.addImage(pballimg)
    o.velocityY=1
    o.scale=0.05
    o.lifetime=50
    og.add(o)
  }
}