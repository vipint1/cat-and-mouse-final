var cat,mouse,bgimg,cati1,cati2,cati4,mousei1,mousei2,mousei4;


function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    cati1 = loadAnimation("images/cat1.png");
    cati2 = loadAnimation("images/cat2.png","images/cat3.png");
    cati4 = loadAnimation("images/cat4.png");
    mousei1 = loadAnimation("images/mouse1.png");
    mousei2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mousei4 = loadAnimation ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,700);
    mouse.scale = 0.1;
    mouse.addAnimation("stand",mousei1);

    cat = createSprite(850,670);
    cat.scale = 0.2;
    cat.addAnimation("sit",cati1);

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if( cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("aftercollide",mousei4)
        mouse.changeAnimation("aftercollide")
        cat.addAnimation("aftercolliding",cati4)
        cat.changeAnimation("aftercolliding")

        cat.velocityX = 0
    }

    drawSprites();
}
   


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("tease",mousei2)
      mouse.changeAnimation("tease")
      cat.addAnimation("running",cati2)
      cat.changeAnimation("running")
      cat.velocityX =-2

  }
  

}
