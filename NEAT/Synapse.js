class Synapse {

    constructor(from, to, w, inno){
        this.from_neuron  = from;
        this.to_neuron    = to;
        this.weight       = w;
        this.innovation   = inno;
        this.active       = true;
    }

    // Mutate the weight of this synapse
    mutateWeight() {
        var rand = random(1);
        if (rand < 0.1) { // 10% of the time completely change weight
            this.weight = random(-1, 1);
        }
        else { // Otherwise only slightly change weight
            this.weight += (randomGaussian() / 50);

            // Then keep the weight between bounds
            if(this.weight > 1){
                this.weight = 1;
            }
            if(this.weight < -1){
                this.weight = -1;
            }
        }
    }

    // Return a copy of this synapse
    clone(from, to) {
        let clone = new Synapse(from, to, this.weight, this.innovation);
        clone.active = this.active
        return clone;
    }

}