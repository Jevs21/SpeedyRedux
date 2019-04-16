function Car() {
    this.x = width * .5;
    this.y = height * .75;
    
    this.speed = 5;
    this.direction = 0;
    this.direction_state = "straight";

    this.sprite_height = 70;
    this.sprite_width  = 47;

    let straightImg = loadImage("Assets/racecar-straight.png");
    let leftImg = loadImage("Assets/racecar-left.png");
    let rightImg = loadImage("Assets/racecar-right.png");
    
    this.sprite = {
        "straight": straightImg,
        "left": leftImg,
        "right": rightImg
    }

    this.score = 0;

    this.show = function() {
        image(this.sprite[this.direction_state], this.x, this.y, this.sprite_width, this.sprite_height);
    }

    this.changeDirection = function(dir, val){
        this.direction_state = dir;
        this.direction = val;
    }

    this.move = function() {
        let new_position = this.x + (this.direction * this.speed);
        if(new_position < (width - this.sprite_width) && new_position > 0){
            this.x += this.direction * this.speed;
        }
    }

    this.checkCollision = function(gate, game_obj) {
        if(this.y == gate.y + gate.sprite_height){
            let car_left = this.x;
            let car_right = this.x + this.sprite_width;
            let inside_left = gate.x + Math.floor(gate.sprite_width / 2);
            let inside_right = gate.x + gate.gate_width + Math.ceil(gate.sprite_width / 2);

            if(car_left > inside_left && car_right < inside_right ){
                this.score += 1;
                console.log("Current score: " + this.score);

                if(this.score > 0 && this.score % 5 == 0){
                    game_obj.increaseDifficulty();
                }

                gate.makeInactive();
            }
            else {
                game_obj.gameOver(this.score);
            }
        }
    }
}