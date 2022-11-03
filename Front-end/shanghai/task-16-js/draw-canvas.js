const baseCanvas = document.getElementsByClassName('base-canvas')[0];

var isDraw = false;
canvas.addEventListener('mousedown', inicioDraw);
canvas.addEventListener('mousemove', drawLine);
function inicioDraw(e){
    isDraw = true;
    ctx.beginPath();
}
function drawLine(e){
    if(!isDraw) {return;}
    const x = e.pageX - baseCanvas.offsetLeft;
    const y = e.pageY - baseCanvas.offsetTop;

    ctx.lineTo(x, y);
    ctx.stroke();
}
function fimDraw(){
    isDraw = false;
    ctx.closePath();
}