var car;

function setup() {
    createCanvas(400,600);
    road = new Road();
    car = new Car();
    gate = new Gate();
}

function draw() {

    road.show();

    car.show();
    car.move();

    gate.show();
}

function keyReleased(){
    if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW){
        car.changeDirection("straight", 0);
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        console.log("Right pressed.");
        car.changeDirection("right", 1);
    }

    if(keyCode === LEFT_ARROW){
        console.log("Left pressed.");
        car.changeDirection("left", -1);
    }
}