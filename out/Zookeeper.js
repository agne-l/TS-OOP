export class Zookeeper {
    constructor() {
        this.feedingLog = [];
    }
    formatDateTime(date) {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        return date.toLocaleString(undefined, options);
    }
    feedAnimal(animalName) {
        const feedingTime = new Date();
        const feedingTimeDate = this.formatDateTime(feedingTime);
        this.feedingLog.push(`${animalName} has been fed at ${feedingTimeDate}`);
    }
    getFeedingLog() {
        return this.feedingLog;
    }
}
