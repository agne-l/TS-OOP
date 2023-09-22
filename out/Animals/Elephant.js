import { Animal } from "../Animal.js";
export class Elephant extends Animal {
    constructor(name, age, weight) {
        super(name, age);
        this.weight = weight;
    }
    makeSound() {
        console.log(`${this.name} is making a sound.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
    walk() {
        console.log(`${this.name} is walking.`);
    }
}
