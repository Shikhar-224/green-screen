var fgimage = null;
var bgimage = null;
var canvas1 = null;
var canvas2 = null;

function fgimg() {
  var imgFile = document.getElementById("can");
  fgimage = new SimpleImage(imgFile);
  canvas1 = document.getElementById("cann1");
  fgimage.drawTo(canvas1);
}

function bgimg() {
  var imgFile = document.getElementById("cano");
  bgimage = new SimpleImage(imgFile);
  canvas2 = document.getElementById("cann2");
  bgimage.drawTo(canvas2);
}

function doGreenScreen() {
  if (fgimage == null || ! fgimage.complete()){
    alert("foreground not loaded");
    return;
  }
  if (bgimage == null || ! bgimage.complete()) {
    alert("background not loaded");
    return;
  }
  clearCanvas();
  
var  output = new SimpleImage(fgimage.getWidth(), fgimage.getHeight());
  
  for (var pixel of fgimage.values()) {
    
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgpixel = bgimage.getPixel(x,y);
        output.setPixel(x,y,bgpixel);
    }
        else { 
        output.setPixel(pixel.getX(),pixel.getY(),pixel);
        }
  }
  output.drawTo(canvas1);
}

function clearCanvas(){
  doclear(canvas1);
  doclear(canvas2);
}

function doclear(canvases){
  var ctxt=canvases.getContext("2d");
  ctxt.clearRect(0,0,canvases.width,canvases.height);
}
  