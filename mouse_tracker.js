window.onload = () => {
    
document.addEventListener("mousemove", trackMouse);

var sprite = document.getElementById("tracker");
originX = sprite.getBoundingClientRect().x;
originY = sprite.getBoundingClientRect().y;



var ghost = document.getElementById("tracker");
ghost.style.position = "absolute";
const top = window.innerHeight / 2;
const left = window.innerWidth / 2;
var ghostXY = {
    left: ghost.style.left,
    top: ghost.style.top
};
console.log(ghostXY.left);
console.log(ghostXY.top);

function trackMouse(event){

    
    var x = event.pageY
    var y = event.pageX;
    var diffy = originY - y;
    var diffx = originX - x;
    console.log(`diffy: ${diffy}, diffx: ${diffx}`);

    


    ghost.style.left = x + left;
    ghost.style.top = y + top;
    
    var rotation_angle = (180 * Math.atan((diffy)/(diffx)) / Math.PI);
    //breaks when we do division by zero


    //console.log(`ra:{ ${rotation_angle}} `)
    rotation_angle *= -1;


    if(diffy > 0 && diffx > 0) {
        rotation_angle += 180; 
    }
    else if(diffy < 0 && diffx > 0) {
        rotation_angle -= 180;
    }

    console.log(`origin X: ${originX}, origin Y: ${originY}, x: ${x}, y: ${y}, angle: ${rotation_angle}`);

    sprite.setAttribute("style", "transform: rotate(" + rotation_angle + "deg)");



}






}