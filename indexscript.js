var myFigure;

function game() {
    myFigure = new figure();
    myFigure.update();
}

function figure() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#0000FF";
    ctx.fillRect(20, 20, 20, 20);
    this.x = 20;
    this.y = 20;
    this.width = 20;
    this.height = 20;

    this.update = function () {
        ctx.clearRect(0, 0, 470, 270);
        make_obstacles();
        ctx.fillRect(this.x, this.y, 20, 20);
        for(i = 0; i < obstacles.length; i++){
            if(myFigure.crashEx(obstacles[i])){
                lose();
                return;
            }
        }

        if ((this.x >= 440 && this.x <= 460) && (this.y >= 20 && this.y <= 40)){
            alert("You won");
            myFigure = new figure();
            myFigure.update();
        }
    }

    this.crashEx = function(some_objects) {
        var left = this.x;
        var right = this.x + (this.width);
        var top = this.y;
        var bottom = this.y + (this.height);
        var o_left = some_objects.x;
        var o_right = some_objects.x + (some_objects.width);
        var o_top = some_objects.y;
        var o_bottom = some_objects.y + (some_objects.height);

        crash = true;
        if ((bottom < o_top) || (top > o_bottom) || (right < o_left) || (left > o_right)){
            crash = false;
        }

        return crash;
    }
}

function lose(){
    alert("Game over");
    myFigure = new figure();
    myFigure.update();
}

function right() {
    myFigure.x += 10;
    myFigure.update();
}

function left() {
    myFigure.x -= 10;
    myFigure.update();
}

function up() {
    myFigure.y -= 10;
    myFigure.update();
}

function down() {
    myFigure.y += 10;
    myFigure.update();
}

function obstacle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#0000FF";
}


var obstacles;

function make_obstacles() {
    obstacles = [];
    obstacles.push(new obstacle(60, 0, 10, 220, "#FF0000"));
    obstacles.push(new obstacle(120, 60, 10, 220, "#00FF00"));
    obstacles.push(new obstacle(180, 0, 10, 220, "#33a8ff"));
    obstacles.push(new obstacle(240, 60, 10, 220, "#00FF00"));
    obstacles.push(new obstacle(300, 0, 10, 220, "#33a8ff"));
    obstacles.push(new obstacle(360, 60, 10, 220, "#00FF00"));
    obstacles.push(new obstacle(420, 0, 10, 220, "#33a8ff"));

}