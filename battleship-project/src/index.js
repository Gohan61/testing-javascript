export class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = null;
    this.sunk = null;
  }

  hit() {
    this.timesHit += 1;
  }

  isSunk() {
    if (this.length === this.timesHit) {
      this.sunk = true;
    }
  }
}
