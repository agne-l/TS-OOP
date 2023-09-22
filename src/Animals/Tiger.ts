import { Animal } from "../Animal.js";
import { SwimAndHunt } from "../Interfaces.js";

export class Tiger extends Animal implements SwimAndHunt {
  hasBeenOutsideInLast8Hours: boolean;

  constructor(name: string, age: number, hasBeenOutsideInLast8Hours: boolean) {
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

  getName() {
    return this.name;
  }
}
