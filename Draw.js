var game;


function setup() {
    createCanvas(400,600);
    game = new SpeedyRedux();
}

function draw() {
    game.checkCollisions();
    game.show();
}

function keyReleased(){
    if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW){
        game.car.changeDirection("straight", 0);
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        game.car.changeDirection("right", 1);
    }

    if(keyCode === LEFT_ARROW){
        game.car.changeDirection("left", -1);
    }
}