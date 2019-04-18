class Neuron {
    
    constructor(id_num) {
        this.id              = id_num;
        this.input_sum       = 0;
        this.output_value    = 0;
        this.output_synapses = [];
        this.layer           = 0;
    }

    // Neuron sends its output to the inputs of its connected neurons
    engage() {
        if(this.layer != 0) {
            this.output_value = this.sigmoid(this.input_sum);
        }

        for(let i = 0; i < this.output_synapses.length; i++){ // For each synapse
            if(this.output_synapses[i].active) { // Only for active synapses
                let val = this.output_synapses[i].weight * this.output_value;
                this.output_synapses[i].to_neuron.input_sum += val;
            }
        }
    }

    // Sigmoid activation function (Need to understand this better)
    sigmoid(x) {
        return 1.0 / (1.0 + pow(Math.E, -4.9 * x));
    }

    // Returns true if this neuron is connected to parameter neuron.
    // Used when adding new connections
    isConeectedTo(neuron){
        if(neuron.layer == this.layer){ // Neurons in the same layer can't connect
            return false;
        }

        if(neuron.layer < this.layer) { // Check if 'this' is any of 'neuron's output connections
            for(let i = 0; i < neuron.output_synapses.length; i++){
                if(neuron.output_synapses[i].to_neuron == this){
                    return true;
                }
            }
        }
        else { // Check if 'this's output connections lead to 'neuron'
            for(let i = 0; i < this.output_synapses.length; i++){
                if(this.output_synapses[i].to_neuron == neuron){
                    return true;
                }
            }

        }
        return false;
    }

    clone() {
        var clone = new Neuron(this.id);
        clone.layer = this.layer;
        return clone;
    }
}