var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
img = new Image;
radius = 60;

img.onload = setup;
img.src = "img/home/normal.png";


function setup() {
  ctx.fillStyle = ctx.createPattern(this, "no-repeat");
  
  canvas.onmousemove = function(e) {
    var r = this.getBoundingClientRect(),
        x = e.clientX - r.left,
        y = e.clientY - r.top;

    ctx.beginPath();
    ctx.filter = "none";
    ctx.moveTo(x + radius, y);
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
  };


  document.getElementById("one").addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  document.getElementById("two").addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  document.getElementById("three").addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}
