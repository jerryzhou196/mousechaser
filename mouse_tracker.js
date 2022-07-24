window.onload = () => {

    document.addEventListener("mousemove", trackMouse);

    middle_y = window.innerHeight / 2;
    middle_x = window.innerWidth / 2;

    var x;
    var y;


    const SPEED = 4;

    sprite = document.getElementById("tracker");
    originX = sprite.getBoundingClientRect().x + 14;
    originY = sprite.getBoundingClientRect().y - 14;

    sprite.style.left = middle_x + "px";
    sprite.style.top = middle_y + "px";

    setInterval(() => {

        current_x_local = parseInt(sprite.style.left.split("px")[0]) + 14;
        current_y_local = parseInt(sprite.style.top.split("px")[0]) + 14;

        diffy_local = ((current_y_local) - y);
        diffx_local = (-1) * ((current_x_local) - x);

        rotation_angle_local = (180 * Math.atan((diffy_local) / (diffx_local)) / Math.PI);

        rotation_angle_local *= -1;

        if ((diffy_local >= 0 && diffx_local <= 0)) {
            rotation_angle_local += 180;
        } else if ((diffy_local <= 0 && diffx_local <= 0)) {
            rotation_angle_local -= 180;
        }

        rotation = "rotate(" + rotation_angle_local + "deg)";
        sprite.style.transform = rotation;

        sprite.style.left = ((current_x_local - 14) + Math.cos(rotation_angle_local * Math.PI / 180) * SPEED) + "px";
        sprite.style.top = ((current_y_local - 14) + Math.sin(rotation_angle_local * Math.PI / 180) * SPEED) + "px";
        console.log(`${rotation_angle_local}, ${diffy_local}, ${diffx_local}`);
    }, 1);

    function trackMouse(event) {
        // sprite_x = parseInt(sprite.style.left.split("px")[0]) + 14;
        // sprite_y = parseInt(sprite.style.top.split("px")[0]) + 14;

        // console.log(sprite_x);
        // console.log(sprite_y);

        x = event.pageX + 14;
        y = event.pageY + 14;

        // diffy = ((sprite_y) - y);
        // diffx = (-1) * ((sprite_x) - x);

        // // console.log(`origin X: ${originX}, origin Y: ${originY}`);

        // rotation_angle = (180 * Math.atan((diffy) / (diffx)) / Math.PI);
        // //breaks when we do division by zero

        // // console.log(`ra:{ ${rotation_angle}} `)
        // rotation_angle *= -1;

        // if (diffy > 0 && diffx < 0) {
        //     rotation_angle += 180;
        // } else if (diffy < 0 && diffx < 0) {
        //     rotation_angle -= 180;
        // }

        // // console.log(`x: ${x}, y: ${y}, diffy: ${diffy}, diffx: ${diffx} angle: ${rotation_angle}`);

        // rotation = "rotate(" + rotation_angle + "deg)";
        // sprite.style.transform = rotation;
        // sprite.setAttribute("style", "transform: rotate(" + rotation_angle + "deg)");
    }
}