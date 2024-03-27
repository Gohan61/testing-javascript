import { GameBoard } from "./gameBoard";

export class Player {
  constructor(enemy) {
    this.enemy = enemy;
  }

  playerAttack(x, y) {
    this.enemy.receiveAttack(x, y);
  }

  computerAttack() {
    const usedCoordinates = [];
    let coordinate = Math.floor(Math.random() * 101);

    while (usedCoordinates.includes(coordinate)) {
      coordinate = Math.floor(Math.random() * 100);
    }

    let x = Number(coordinate.toString().split("")[0]);
    let y = Number(coordinate.toString().split("")[1]);

    this.enemy.receiveAttack(x, y);
  }
}
