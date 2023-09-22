import { Zebra } from "./Animals/Zebra.js";
import { Elephant } from "./Animals/Elephant.js";
import { Tiger } from "./Animals/Tiger.js";
import { Zoo } from "./Zoo.js";
const zebra = new Zebra("Stripes", 5, "40km/h", "Africa");
const elephant = new Elephant("Peanut", 10, "5t");
const tiger = new Tiger("Fluffy", 5, false);
console.log(zebra);
console.log(elephant);
console.log(tiger);
const zoo = Zoo.getInstance();
zoo.addAnimal(zebra);
console.log(zoo);
console.log(zoo.getAllAnimals());
