class SynapseHistory {
    constructor(from, to, inno, inno_nums){
        this.from_neuron     = from;
        this.to_neuron       = to;
        this.innovation      = inno;
        this.innovation_nums = []; // Need to 


        arrayCopy(inno_nums, this.innovation_nums);
    }

    // Returns true if the original genome matches the param genome
    matches(genome, from, to) {
        if(genome.genes.length === this.innovation_nums.length){ // Number of synapses must be the same
            if(from.id === this.from_neuron && to.id === this.to_neuron) {
                // Next check if all the innovation nums match from the genome
                for(let i = 0; i < genome.genes.length; i++){
                    if(!this.innovation_nums.includes(genome.genes[i].innovation)){
                        return false;
                    }
                }
                // Inno nums match.. everything checks out
                return true;
            }
        }
        return false;
    }
}