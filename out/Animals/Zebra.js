import { Animal } from "../Animal.js";
export class Zebra extends Animal {
    constructor(name, age, maxSpeed, origin) {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
    makeSound() {
        console.log(`${this.name} is making a sound.`);
    }
    jump() {
        console.log(`${this.name} can jump.`);
    }
    run() {
        console.log(`${this.name} can run.`);
    }
    getName() {
        return this.name;
    }
}
