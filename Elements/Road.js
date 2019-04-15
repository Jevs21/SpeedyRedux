function Road(speed) {
    this.speed = speed;
    this.animation = [];
    this.index = 0;

    this.loadSprites = function() {

        for(let i = 4; i >= 0; i--){
            this.animation.push(loadImage("Assets/track-0"+i+".png"));
        }
    }

    this.show = function(){
        let index = floor(this.index) % this.animation.length;
        image(this.animation[index], 0, 0, width, height);
    }

    this.animate = function(){
        this.index += this.speed;
    }
}