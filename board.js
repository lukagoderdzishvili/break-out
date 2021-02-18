function board(x, y, width, height, borderRadius){
    this.x = x; // paddle position
    this.y = y; // paddle position
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    
    this.add = function(){
        rect(this.x, this.y, this.width, this.height, this.borderRadius);
  
        if(mouseX > 23 && mouseX < 378){
           this.x = mouseX - this.width / 2;}
  
    };
  }
  