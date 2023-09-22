import { Animal } from "./Animal.js";

export class Zoo {
  private static instance: Zoo;
  private animals: Animal[] = [];

  private constructor() {}

  static getInstance(): Zoo {
    if (!Zoo.instance) {
      Zoo.instance = new Zoo();
      return Zoo.instance;
    }
    return Zoo.instance;
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  getAllAnimals() {
    return this.animals;
  }
}
