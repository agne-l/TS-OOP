export class Zoo {
    constructor() {
        this.animals = [];
    }
    static getInstance() {
        if (!Zoo.instance) {
            Zoo.instance = new Zoo();
            return Zoo.instance;
        }
        return Zoo.instance;
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    getAllAnimals() {
        return this.animals;
    }
}
