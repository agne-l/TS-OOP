export class Zookeeper {
    constructor() {
        this.feedingLog = [];
    }
    feedAnimal(animalName) {
        console.log(`${animalName} has been fed.`);
        const feedingTime = new Date();
        this.feedingLog.push({ animalName, feedingTime });
    }
    getFeedingLog() {
        return this.feedingLog;
    }
}
