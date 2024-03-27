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

export const carrier = new Ship(5);
export const battleship = new Ship(4);
export const cruiser = new Ship(3);
export const submarine = new Ship(2);
export const destroyer = new Ship(1);
