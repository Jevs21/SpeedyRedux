function Gate(speed) {
    this.sprite_height = 18;
    this.sprite_width  = 12;
    this.sprite = loadImage("Assets/pylon.png");

    this.x = width / 2;
    this.y = -this.sprite_height;
    this.gate_width = 80;

    this.speed = speed;

    
    
    this.show = function() {
        image(this.sprite, this.x, this.y, this.sprite_width, this.sprite_height);
        image(this.sprite, this.x + this.gate_width, this.y, this.sprite_width, this.sprite_height);
    }

    this.move = function() {
        if(this.y > height){
            this.y = -this.sprite_height;
        }
        else{
            this.y += speed;
        }
    }
}