var canvas = document.getElementById("canvas");
var Height = window.screen.height * 0.8;
canvas.height = Height;

var context = canvas.getContext("2d");
var backgroundimg = new Image();
var Ldoodle = new Image();
var Rdoodle = new Image();
Ldoodle.src = "img/Ldoodle.png";
Rdoodle.src = "img/Rdoodle.png";
backgroundimg.src = "img/bg.jpg";
backgroundimg.onload = function (ev) {
    var pattern = context.createPattern(backgroundimg, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, 568, Height);
    context.beginPath();
    context.moveTo(254, Height - 60);
    context.lineTo(314, Height - 60);
    context.lineWidth = 10;
    context.strokeStyle = "green";
    context.lineCap = "round";
    context.stroke();
    panelgroup.push({
        x: 254,
        y: Height - 60,
        status: 1
    });
    Player.x = 253;
    Player.y = Height - 125;
    context.drawImage(Rdoodle, Player.x, Player.y);

    function startanimation() {
        context.clearRect(0, 0, 568, Height);

        CreatePanel(context);
        context.fillStyle = pattern;
        context.fillRect(0, 0, 568, Height);
        context.font = "bold 24px Arial";
        context.textAlign = "left";
        context.fillStyle = "#3d82ff";
        context.fillText(parseInt(GameData.score), 50, 50);
        animation(context);
        jump();
        collide();
        gamescroll();
        move(context);

        if (Player.y > Height) {
            window.cancelAnimationFrame(startanimation);
            alert("游戏结束!\n你的得分为:"+parseInt(GameData.score));
            location.reload();
        } else {
            requestAnimationFrame(startanimation);

        }

    }
    var start = document.getElementById("startBTN");
    start.addEventListener("click",function () {
        window.requestAnimationFrame(startanimation);
        start.style.display = "none";
    })

};


function getLocation(x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
        x: (x - bbox.left) * (canvas.width / bbox.width),
        y: (y - bbox.top) * (canvas.height / bbox.height)
    };
}

canvas.onmousemove = function (e) {
    var location = getLocation(e.clientX, e.clientY);
    mouseX = parseInt(location.x) - 31;
};


