let canvas = document.querySelector("#cvs");
let context = canvas.getContext("2d");
let w = canvas.width = 500, h = canvas.height = 500;

let x = 0;
let y = 0;

let count = 0;
let count2 = 0;


let draw = () => {
    context.clearRect(0, 0, w, h);
    context.fillRect(0, 0, x, y);
    x++;
    y++;
    requestAnimationFrame(draw);
    count ++;
}

setInterval(
    function(){
        console.log(count - count2);
        count2 = count;
    },
    1000
);

draw();