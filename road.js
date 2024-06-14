class Road {
  constructor(x, width, laneCount = 4) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width / 2;
    this.right = x + width / 2;

    // Assuming you want the road to extend beyond the visible canvas, you should set these
    // to actual numbers that are beyond the canvas dimensions. For example:
    this.top = -10000; // Changed to a negative value to represent 'up' off-screen
    this.bottom = 10000; // Assuming you meant to spell this correctly

  }
  getLaneCenter(laneIndex){
     const laneWidth=this.width/this.laneCount;
     return this.left+laneWidth/2+this.laneIndex*laneWidth;
  }

  draw(ctx) {
    ctx.lineWidth = 5; // Corrected property name
    ctx.strokeStyle = "white"; // Corrected value to be a string

    for(let i=0;i<=this.laneCount;i++){
      const x = lerp(
        this.left,
        this.right,
        i/this.laneCount
      );
      if(i>0 && i<this.laneCount){
        ctx.setLineDash([20,20]);
      }else{
        ctx.setLineDash([])
      }
      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();


  }
}
}
