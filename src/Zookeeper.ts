export class Zookeeper {
  private feedingLog: { animalName: string; feedingTime: Date }[] = [];

  feedAnimal(animalName: string): void {
    console.log(`${animalName} has been fed.`);

    const feedingTime = new Date();

    this.feedingLog.push({ animalName, feedingTime });
  }

  getFeedingLog(): { animalName: string; feedingTime: Date }[] {
    return this.feedingLog;
  }
}
