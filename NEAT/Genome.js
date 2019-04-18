class Genome {
    constructor(inputs, outputs, crossover){
        this.genes = [];
        this.neurons = [];
        this.inputs = inputs;
        this.outputs = outputs;
        this.layers = 2;
        this.next_neuron = 0;
    }
}