function Gate(speed, g_width) {
    this.sprite_height = 18;
    this.sprite_width  = 12;
    this.sprite = loadImage("Assets/pylon.png");

    this.gate_width = g_width;

    this.x = Math.floor(Math.random() * (width - this.gate_width - this.sprite_width - 40));
    this.x += 20; // To make up for the edge of the track
    this.y = -this.sprite_height - 30;

    this.speed = speed;
    this.state = 'active';    
    
    this.show = function() {
        image(this.sprite, this.x, this.y, this.sprite_width, this.sprite_height);
        image(this.sprite, this.x + this.gate_width, this.y, this.sprite_width, this.sprite_height);
    }

    this.move = function() {
        if(this.y > height){
            this.y = -this.sprite_height;
            this.state = 'delete';
        }
        else{
            this.y += speed;
        }
    }

    this.makeInactive = function() {
        this.state = 'inactive';
    }

}