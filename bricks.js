
function createBricks() {
    let rows = 5;
    let columns = 5;
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        let brick = {
          x: i * 77 + 12, // position of brick
          y: j * 12 + 30, // position of brick
          width: brick_width,
          height: brick_height,
          color: brickColors[j]
        }
        bricks.push(brick);
      }
    }
  }
  
  //add bricks in the game
  function drawBricks() {
    for(let i = 0; i < bricks.length; i++){
      fill(bricks[i].color);
      rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
    }
  }
  
  //checker 
  function checkBricks(ball, brick) {
      if (ball.y - 15 < brick.y && ball.x > brick.x && ball.x <= brick.x + 77) {
        return true;
    }
  }