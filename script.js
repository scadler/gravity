const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var ctx = canvas.getContext('2d');
cnvs = {
    width: 500,
    height: 500,
}
atr = {
    r: 5,
    x: 0,
    y: 0,
    theta: Math.PI/2,
    v: 5,
    gravity: 0
}
function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}
function drawCircle(x, y, r){
    context.fillStyle = "white";
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false);
    context.lineWidth = 1.5;
    context.strokeStyle = "white";
    context.closePath();
    context.fill();
    context.stroke();
}
function update(){
    atr.gravity += 0.2
    drawRect(0,0,canvas.width,canvas.height,"#000000")
    atr.x += atr.v*(Math.cos(atr.theta-(Math.PI/2)))
    atr.y -= atr.v*(Math.sin(atr.theta-(Math.PI/2))) - atr.gravity
    drawCircle(atr.x, atr.y, atr.r)
    if(atr.y>= canvas.height - atr.r){
        atr.gravity =- atr.gravity
        atr.theta = atr.theta//calculate angle of reflection
    }
    if(/* if going to leave canvas*/x){
        atr.theta = atr.theta//calculate angle of reflection
    }
}
setInterval(update,20)