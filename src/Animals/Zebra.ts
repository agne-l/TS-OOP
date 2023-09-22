import { Animal } from "../Animal.js";
import { JumpAndRun } from "../Interfaces.js";

export class Zebra extends Animal implements JumpAndRun {
  maxSpeed: string;
  origin: string;

  constructor(name: string, age: number, maxSpeed: string, origin: string) {
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
}
