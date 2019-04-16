function SpeedyRedux() {

    this.road = new Road(1);
    this.road.loadSprites();

    this.car = new Car();

    this.gates = [];
    this.gateCount = 0;

    // Initial difficulty variables
    this.gate_speed = 3;
    this.gate_width = 120;
    this.new_gate_delay = 200; // Frames ?

    this.is_game_over = false;
    
    this.show = function() {
        
        if(!this.is_game_over){
            
            this.gateTimer();

            background(0);

            this.road.show();
            this.road.animate();

            this.car.show();
            this.car.move();

            for(let i = 0; i < this.gates.length; i++){
                this.gates[i].show();
                this.gates[i].move();
            }
        }
        else {
            background(0);
        }
    }

    this.checkCollisions = function() {
        if(this.gates.length > 0 && !this.is_game_over){
            this.car.checkCollision(this.gates[0], this);
        }
    }

    this.createGate = function() {
        this.gates.push(new Gate(this.gate_speed, this.gate_width));
    }

    this.removeGate = function() {
        if(this.gates.length > 0){
            if(this.gates[0].state == 'delete'){
                this.gates.shift();
            }
        }
    }

    this.gateTimer = function() {
        // Remove gates that are below screen
        this.removeGate();
        // Create new gates if it is the correct time increment
        if(this.gateCount % this.new_gate_delay == 0){
            this.createGate();
        }
        this.gateCount += 1;

        // Just incase integer overflow could occur
        if(this.gateCount > Number.MAX_SAFE_INTEGER - 2){
            this.gateCount = 0;
        }
    }

    this.increaseDifficulty = function() {
        //this.gate_speed = 3;
        let is_width_max = false;
        let is_delay_max = false;

        if(this.gate_width > 58){
            this.gate_width -= 8;
        }
        else {
            is_width_max = true;
        }

        if(this.new_gate_delay > 100){
            this.new_gate_delay -= 30; // Frames ?
        }
        else {
            is_delay_max = true;
        }

        if(is_width_max && is_delay_max){
            this.gate_speed += 1;
        }
        
        //this.road.increaseSpeed();
    }

    this.gameOver = function(finalScore) {
        this.is_game_over = true;
        console.log("GAME OVER. Final score = " + finalScore);
    }
}