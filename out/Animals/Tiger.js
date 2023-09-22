import { Animal } from "../Animal.js";
export class Tiger extends Animal {
    constructor(name, age, hasBeenOutsideInLast8Hours) {
        super(name, age);
        this.hasBeenOutsideInLast8Hours = hasBeenOutsideInLast8Hours;
    }
    makeSound() {
        console.log(`${this.name} is making a sound.`);
    }
    swim() {
        console.log(`${this.name} can swim.`);
    }
    hunt() {
        console.log(`${this.name} can hunt.`);
    }
}
