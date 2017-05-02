var segLength = 20,
dx, dy, angle,
gridSize,
stepSizeX, stepSizeY, count;

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  background(255);

  canvas.parent("sketch-container");


}

function draw(){
  gridSize = windowWidth/75;
  stepSizeX = windowWidth/gridSize;
  stepSizeY = windowHeight/gridSize;

  //background(255); //Use this to update with a new background every frame


  noStroke();  //Use this block to have the background fade out
  fill(255, 200); //producing fuzzy//blurry//psychadelic visuals
  rect(0, 0, windowWidth, windowHeight);

  stroke(137, 50);
  noFill();



  //stroke(0, 50); //Use this to slowly draw darker lines as
                   //the sketch continues to run

  count = 0;

  for(var i = stepSizeX; i <= windowWidth-stepSizeX; i += stepSizeX){
    for(var j = stepSizeY; j <= windowHeight-stepSizeY; j += stepSizeY){

      dx = mouseX - i;
      dy = mouseY - j;
      angle = atan2(dy, dx);
      segment(i, j, angle);
      /*if(count%2){  //uncomment this block to add an offset to
        segment(i, j+stepSizeY/4, angle); //the vertical columns
      } else {
        segment(i, j-stepSizeY/4, angle);
      }
      */
    }
    count++;
  }
}

function segment(x, y, a){
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
