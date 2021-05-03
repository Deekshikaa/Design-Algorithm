var fixedobj,movingobj;

function setup() {
  createCanvas(800,400);
 fixedobj= createSprite(400, 200, 50, 50);
 movingobj = createSprite(700, 200, 50,50);
}

function draw() {
  background(255,255,255); 
  movingobj.x = mouseX;
  movingobj.y = mouseY;
  console.log(movingobj.x-fixedobj.x);
  if( movingobj.x-fixedobj.x <= fixedobj.width/2 + movingobj.width/2 &&
     fixedobj.x - movingobj.x <= fixedobj.width/2 + movingobj.width/2 && 
     movingobj.y-fixedobj.y <= fixedobj.height/2 + movingobj.height/2 &&
     fixedobj.y - movingobj.y <= fixedobj.height/2 + movingobj.height/2){
    movingobj.shapeColor = "red";
    fixedobj.shapeColor = "yellow";
  }else{
    movingobj.shapeColor = "blue";
    fixedobj.shapeColor = "blue";
  }

  drawSprites();
}