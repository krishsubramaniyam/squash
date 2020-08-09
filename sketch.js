var ball,ballimg, paddle, paddleimg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200, 200, 10, 10);
  ball.addImage("image1", ballimg);
  ball.scale = 0.5;
  
  paddle = createSprite(320, 395, 10, 10);
  paddle.addImage("paddle.png", paddleimg);
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
ball.velocityX = -6;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);
ball.bounceOff(paddle, randomVelocity);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {paddle.y = paddle.y - 20;
   
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle.y= paddle.y + 20;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY = random(-8, 8);
}