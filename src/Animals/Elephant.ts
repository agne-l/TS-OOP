import { Animal } from "../Animal.js";
import { SleepAndWalk } from "../Interfaces.js";

export class Elephant extends Animal implements SleepAndWalk {
  weight: string;

  constructor(name: string, age: number, weight: string) {
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
