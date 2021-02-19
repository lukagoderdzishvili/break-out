// MAIN VARIABLES
var ball,
    paddle,
    brick,
    score = 0,
    live = 3,
    lifeLost = false,
    gameInfo = true,
    gameIsOver = false,
    game = true,
    restart = false, 
    gameIsColleted = false;

var playAgain;

// BRICKS CONSTS
const brick_width = 68,
      brick_height = 10,
      brick_border = 0,
      brick_margin = 10;
const bricks = [];
const brickColors = ["#f0e1f7", "#d9b612", "#00ff11", "#5e5e5e", "#FFFFCC", ];
      

function setup(){
  createCanvas(400, 400);
  
  paddle = new board(175, 370, 50, 10, 10);
  ball = new ball(200, 200, 30);
  
  createBricks();
  playAgain = new rstBtn("darkMagenta", "firebrick", 20, 200, 300, "Play again");
  
  
}

function draw(){
  background(0, 0, 0);
  
  if(game){
    ball.active();
  }
  
  paddle.add(); 
  
 
  drawBricks(); 
  
  scoreAndLiveText(); // live and score count


  checkGame();
  
  

}



ball.active = function(){
  ball.show();
  ball.move();
  ball.collised(); // check distance with paddle
  ball.checkBall(); // check distance with bricks and more addons
}



function checkGame(){

  //when ball is lost
  if(lifeLost){
    lostLifeText();
  }
  
  //welcome  
  if(gameInfo){
    welcomeText();
  }
  
  //lose game 
  if(live < 1){
    gameOverText();
    lifeLost = false;
    ball.x = -500;
    game = false;
    restart = true;
  }
  //win game 
  if(score == 25){
    gameIsColleted = true;
  }
  
  if(gameIsColleted){
    champion();
    ball.x = -500;
    game = false;
    restart = true;
    
  }

  if(restart){
    playAgain.show();
    playAgain.clicked();
  };
}


//txt for ball lost
function lostLifeText() {
  
  textAlign(CENTER);
  noStroke()
  textStyle(BOLD);
  
  textSize(30)
  text('Life Lost', 200, 170)
  
  textSize(20);
  text('Now you have ' + live + ' lives remaining', 200, 250);
  textSize(18);
  text('Press Any Button to continue', 200, 275);
  
}

// mini instruction
function welcomeText(){
  textSize(28);
  fill(255);
  text("Breakout Game!!", 80, 150);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill("#fafad2");
  strokeWeight(3);
  stroke(0);
  text("use the Mouse to move the paddle", 200 , 200);
  fill("#f0e68c");
  text("Press Any Button to start the game!!", 200, 250);
  
}
 
// txt for bye 
function gameOverText(){
  fill("darkolivegreen");
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    stroke("firebrick");
    textSize(45);
    text("GAME OVER!!", 200, 230);
    fill("ghostwhite");
    textSize(20);
}

//txt for win
function champion(){
  fill("darkMagenta");
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    stroke("firebrick");
    textSize(45);
    text("YOU WIN!!",200, 230);
    fill("Khaki");
    textSize(20);
}

//score and live txt 
function scoreAndLiveText(){
  textAlign(LEFT);
  textStyle(NORMAL);
  textSize(12);
  text("Score : " + score, 330, 20);
  text("Live : " + live, 15, 20);
}

function rstBtn(extract, strk, size, x, y, str){
  this.extract = extract;
  this.strk = strk;
  this.size = size;
  this.x = x;
  this.y = y;
  this.str = str;
  
  this.show = function(){
    text(str, x, y);
  }

  this.clicked = function(){
    let distance = int(dist(mouseX, mouseY, this.x, this.y));
    if(distance < 20){
      window.location.reload(true);
      return 0;
    }
  }
}
