function Road() {
    this.show = function(){
        fill(51);
        rect(0, 0, width, height);

        fill(0);
        rect(width-20, 0, 20, height);

        strokeWeight(4);
        stroke("red");
        line(width-20, 20, width, 0);

    }
}