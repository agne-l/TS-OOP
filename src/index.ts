import { Zebra } from "./Animals/Zebra.js";
import { Elephant } from "./Animals/Elephant.js";
import { Tiger } from "./Animals/Tiger.js";
import { Zoo } from "./Zoo.js";
import { Zookeeper } from "./Zookeeper.js";

const zebra = new Zebra("Stripes", 5, "40km/h", "Africa");
const elephant = new Elephant("Peanut", 10, "5t");
const tiger = new Tiger("Fluffy", 5, false);
const tiger2 = new Tiger("Tiggy", 6, false);

const zoo = Zoo.getInstance();
zoo.addAnimal(zebra);
zoo.addAnimal(elephant);
zoo.addAnimal(tiger);
zoo.addAnimal(tiger2);

const allAnimals = zoo.getAllAnimals();
console.log(allAnimals);

const zookeeper = new Zookeeper();

const zebraName = zebra.getName();
const elephantName = elephant.getName();
const tigerName = tiger.getName();
const tiger2Name = tiger2.getName();

zookeeper.feedAnimal(zebraName);
zookeeper.feedAnimal(elephantName);
zookeeper.feedAnimal(tigerName);
zookeeper.feedAnimal(tiger2Name);

const feedingLog = zookeeper.getFeedingLog();
console.log(feedingLog);
