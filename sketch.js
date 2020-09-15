var ball,ball_img,paddle,paddle_img,top_edge,bottom_edge,
    left_edge,rand;

function preload() {
 ball_img = loadAnimation("ball.png");
  paddle_img = loadAnimation("paddle.png");
}

function setup() {
  createCanvas(400, 400);
 ball = createSprite (200,200,30,30);
  ball.addAnimation("ballimage",ball_img);
  
  paddle = createSprite (300,200,30,30);
 paddle.addAnimation("paddleimage",paddle_img);
  
  top_edge = createSprite (400,1,800,15);
  top_edge.visible = false;
  
   bottom_edge = createSprite (1,400,800,15);
  bottom_edge.visible = false;
  
   left_edge = createSprite (0,200,15,800);
  left_edge.visible = false;
  
 ball.velocityX = -3;

}

function draw() {
  background(205,153,0);
  
  createEdgeSprites();

 if (ball.isTouching(paddle)){
  ball.bounceOff(paddle);
   ball.velocityY = -5
 }
  
  if (ball.isTouching(left_edge)){
  ball.bounceOff(left_edge); 
 }
  
  if (ball.isTouching(top_edge)){
  ball.bounceOff(top_edge); 
 }
  
  if (ball.isTouching(bottom_edge)){
  ball.bounceOff(bottom_edge); 
 }
  if (paddle.isTouching(top_edge)){
  paddle.bounceOff(top_edge); 
 }
  if (paddle.isTouching(bottom_edge)){
  paddle.bounceOff(bottom_edge); 
 }
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  drawSprites();

}

function randomVelocity() {
 
}