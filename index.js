var c = document.querySelector('.c')
var context = c.getContext('2d')
var minidrag = require('minidrag');
fitToContainer(c);

var drag = document.querySelector('.drag')
var container = document.querySelector('.container')

minidrag(drag, { constraint: container });

for (var x = 0.5; x <= c.width; x += 10) {
  console.log('beep')
  context.moveTo(x, 0);
  context.lineTo(x, c.height);
}

for (var y = 0.5; y <= c.height; y += 10) {
  context.moveTo(0, y);
  context.lineTo(c.width, y);
}

context.strokeStyle = "#eee";
context.stroke();

function fitToContainer(canvas) {
  canvas.style.width='100%';
  canvas.style.height='100%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
