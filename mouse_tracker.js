window.onload = () => {

    const half_y = window.innerHeight / 2;
    const half_x = window.innerWidth / 2;

    document.addEventListener("mousemove", trackMouse);

    var sprite = document.getElementById("tracker");
    originX = sprite.getBoundingClientRect().x - half_x;
    originY = sprite.getBoundingClientRect().y - half_y;

    var rotation_angle = -1;

    function trackMouse(event) {

        var x = event.pageX - half_x;
        var y = (-1) * (event.pageY - half_y);

        var diffy = originY - y;
        var diffx = originX - x;

        // console.log(`origin X: ${originX}, origin Y: ${originY}`);
        // console.log(`x: ${x}, y: ${y}, diffy: ${diffy}, diffx: ${diffx} angle: ${rotation_angle}`);


        rotation_angle = (180 * Math.atan((diffy) / (diffx)) / Math.PI);
        //breaks when we do division by zero

        //console.log(`ra:{ ${rotation_angle}} `)
        rotation_angle *= -1;

        if (diffy > 0 && diffx > 0) {
            rotation_angle += 180;
        }
        else if (diffy < 0 && diffx > 0) {
            rotation_angle -= 180;
        }
        rotation = "rotate(" + rotation_angle + "deg)";
        sprite.style.transform = rotation;
        // sprite.setAttribute("style", "transform: rotate(" + rotation_angle + "deg)");
    }
}