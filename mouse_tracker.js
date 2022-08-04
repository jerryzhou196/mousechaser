// @ts-check
var _this = this;
var SPEED = 1;
var FRAME_RATE = 60;
window.onload = function () {
    var x;
    var y;
    var middle_y = window.innerHeight / 2;
    var middle_x = window.innerWidth / 2;
    console.log(_this.pointer);
    var sprite = document.getElementById("tracker");
    sprite.style.left = middle_x + "px";
    sprite.style.top = middle_y + "px";
    function trackMouse(event) {
        x = event.pageX + 14;
        y = event.pageY + 14;
    }
    document.addEventListener("mousemove", trackMouse);
    setInterval(function () {
        var current_x_local = parseInt(sprite.style.left.split("px")[0]) + 28;
        var current_y_local = parseInt(sprite.style.top.split("px")[0]) + 28;
        var diffy_local = ((current_y_local) - y);
        var diffx_local = (-1) * ((current_x_local) - x);
        var rotation_angle_local = (180 * Math.atan((diffy_local) / (diffx_local)) / Math.PI);
        rotation_angle_local *= -1;
        if ((diffy_local >= 0 && diffx_local <= 0)) {
            rotation_angle_local += 180;
        }
        else if ((diffy_local <= 0 && diffx_local <= 0)) {
            rotation_angle_local -= 180;
        }
        var rotation = "rotate(" + rotation_angle_local + "deg)";
        sprite.style.transform = rotation;
        sprite.style.left = ((current_x_local - 28) + Math.cos(rotation_angle_local * Math.PI / 180) * SPEED) + "px";
        sprite.style.top = ((current_y_local - 28) + Math.sin(rotation_angle_local * Math.PI / 180) * SPEED) + "px";
        console.log("".concat(rotation_angle_local, ", ").concat(diffy_local, ", ").concat(diffx_local));
    }, (1 / FRAME_RATE) * 1000);
};
