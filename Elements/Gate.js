function Gate() {

    this.x = width / 2;
    this.y = height / 2;
    this.gate_width = 80;

    this.sprite_height = 18;
    this.sprite_width  = 12;
    this.sprite = loadImage("Assets/pylon.png");
    
    this.show = function() {
        image(this.sprite, this.x, this.y, this.sprite_width, this.sprite_height);
        image(this.sprite, this.x + this.gate_width, this.y, this.sprite_width, this.sprite_height);
    }
}