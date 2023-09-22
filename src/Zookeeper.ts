export class Zookeeper {
  private feedingLog: string[] = [];

  private formatDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleString(undefined, options);
  }

  feedAnimal(animalName: string): void {
    const feedingTime = new Date();
    const feedingTimeDate = this.formatDateTime(feedingTime);
    this.feedingLog.push(`${animalName} has been fed at ${feedingTimeDate}`);
  }

  getFeedingLog(): string[] {
    return this.feedingLog;
  }
}
