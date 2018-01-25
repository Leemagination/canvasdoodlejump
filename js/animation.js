if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            var self = this, start, finish;
            return window.setTimeout(function () {
                start = +new Date();
                callback(start);
                finish = +new Date();
                self.timeout = 1000 / 60 - (finish - start);
            }, self.timeout);
        });
}


function animation(context) {
    for (let i = 0; i < panelgroup.length; i++) {
        var PanelX = panelgroup[i].x;
        var PanelY = panelgroup[i].y;
        var status = panelgroup[i].status;
        context.beginPath();
        context.moveTo(PanelX, PanelY);
        context.lineTo(PanelX + 60, PanelY);
        if (status) {
            context.strokeStyle = "green";
        } else {
            context.strokeStyle = "#c4c4c4";
        }

        context.stroke();
    }
}

function jump() {
    Player.y = Player.y - Player.Yacceleration;
    Player.Yacceleration -= 0.5;
    if (Player.Yacceleration < 0) {
        Player.condition = 0;
    }
    if (Player.Yacceleration < -10) {
        Player.Yacceleration = -10;
    }
}

function move(context) {
    if (mouseX == null) {
        context.drawImage(Rdoodle, Player.x, Player.y);
    }

    if (mouseX < Player.x - 6) {
        Player.direction = 0;
        Player.x = Player.x-2;
    }

    if (mouseX > Player.x + 6) {
        Player.direction = 1;
        Player.x = Player.x+ 2;
    }

    if (mouseX < Player.x - 100) {
        Player.direction = 0;
        Player.x -= 10;
    }

    if (mouseX > Player.x + 100) {
        Player.direction = 1;
        Player.x += 10;
    }

    if (Player.direction == 1) {
        context.drawImage(Rdoodle, Player.x, Player.y);
    }
    if (Player.direction == 0) {
        context.drawImage(Ldoodle, Player.x, Player.y);
    }
}

function gamescroll() {
    if (Player.y <= Height / 2) {
        var distance = Height / 2 - Player.y;
        for (let i = 0; i < panelgroup.length; i++) {
            var panel = panelgroup[i];
            panel.y += distance / 2;
        }
        Player.y += distance / 2;
        GameData.score +=distance/2;
    }

 if(GameData.score>=3000){
     GameData.level = 50;
     GameData.probability = 30;
 }
    if(GameData.score>=6000){
        GameData.level = 70;
        GameData.probability = 50;

    }
    if(GameData.score>=9000){
        GameData.level = 90;
        GameData.probability = 70;
    }
    if(GameData.score>=12000){
        GameData.level = 120;
        GameData.probability = 90;
    }

    if (panelgroup[0].y > Height) {
        panelgroup.shift();
    }
}
