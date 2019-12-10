var fixedRect, movingRect;
var ob1;
var ob2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
ob1=createSprite(200,200,40,20);
ob1.shapeColor="blue";
ob1.debug=true;
ob2=createSprite(300,250,40,20);
ob2.shapeColor="blue";
ob2.debug=true;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  ob1.x=World.mouseX;
  ob1.y=World.mouseY;

bounceOff(movingRect,fixedRect);
  if(isTouching(ob1,ob2))  {
   ob1.shapeColor="red";
   ob2.shapeColor="red";
     }
    else{
      ob1.shapeColor="blue";
   ob2.shapeColor="blue";
    } 
  drawSprites();
}
