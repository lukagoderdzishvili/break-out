
function ball(x, y, diameter){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.start = true;
    this.p = 0;
    this.m = 0;
    
    
    this.show = function(){
        circle(this.x, this.y, this.diameter);
    };
    
    this.move = function(){
        this.y += this.m;
        this.x += this.p;
        if(this.x > 400 - this.diameter / 2){this.lose = false; this.p = -this.p;}
        if(this.x < this.diameter / 2 ){this.lose = true; this.p = -this.p;}
        if(this.y < this.diameter / 2 ){this.lose = true; this.m = -this.m;}
    };
    
   
    this.collised = function(){
        var distance = int(dist(ball.x, ball.y, paddle.x+2, paddle.y));
        var distance2 = int(dist(ball.x, ball.y, paddle.x+46, paddle.y));
    
        if(distance < 20 || distance2 < 20){
        this.y -= 10; 
        this.m = -this.m;
        
        }
    };
    
     
    
     this.checkBall = function(){
         if(this.y > 420){
           lifeLost = true;
           this.x = 200;
           this.y = 200;
           this.p = 0;
           this.m = 0;
           live--;
           ball.start = true;
         }
         if(keyIsPressed && ball.start && !gameIsOver && !gameIsColleted){
           this.p = 2;
           this.m = 2;
           lifeLost = false;
           ball.start = false;
           gameInfo = false;
           
         }
       
         for(let i = 0; i < bricks.length; i++){
             if(checkBricks(ball, bricks[i])){
              bricks.splice(i, 1);
              ball.m = -ball.m;
              ball.y += 5;
              score++;
              }
         }
     };
    
   
  }