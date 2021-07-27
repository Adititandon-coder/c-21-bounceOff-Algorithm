var gameObject1, gameObject2;

function setup() {
  createCanvas(800, 400);
  gameObject1 = createSprite(50, 200, 50, 50);
  gameObject2 = createSprite(750, 200, 50, 50);
  gameObject1.velocityX = 4;
  gameObject2.velocityX = -4;
  gameObject1.shapeColor = "red";
  gameObject2.shapeColor = "green";
}

function draw() {
  background("lightblue");

  bounceOff(gameObject1, gameObject2);

  drawSprites();
}
