var car;
var road;
var gate;

function setup() {
    createCanvas(400,600);
    road = new Road(1);
    console.log("Loading road sprites");
    road.loadSprites();
    console.log("Done loading sprites");
    car = new Car();
    gate = new Gate(3);
}

function draw() {

    car.checkCollision(gate);

    background(0);

    road.show();
    road.animate();

    car.show();
    car.move();

    gate.show();
    gate.move();
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