import { Zebra } from "./Animals/Zebra.js";
import { Elephant } from "./Animals/Elephant.js";
import { Tiger } from "./Animals/Tiger.js";
import { Zoo } from "./Zoo.js";
import { Zookeeper } from "./Zookeeper.js";

const zebra = new Zebra("Stripes", 5, "40km/h", "Africa");
const elephant = new Elephant("Peanut", 10, "5t");
const tiger = new Tiger("Fluffy", 5, false);

console.log(zebra);
console.log(elephant);
console.log(tiger);

const zebraName = zebra.getName();
console.log(zebraName);

const elephantName = elephant.getName();
console.log(elephantName);

const tigerName = tiger.getName();
console.log(tigerName);

const zoo = Zoo.getInstance();
zoo.addAnimal(zebra);
console.log(zoo);

console.log(zoo.getAllAnimals());

const zookeeper = new Zookeeper();

zookeeper.feedAnimal(zebraName);
// zookeeper.feedAnimal(elephantName);
// zookeeper.feedAnimal(tigerName);

const feedingLog = zookeeper.getFeedingLog();
console.log(feedingLog);
