import { GameBoard } from "./gameBoard";

export class Player {
  constructor(enemy) {
    this.enemy = enemy;
    this.myTurn = false;
  }

  playerAttack(x, y) {
    if (this.myTurn === true) {
      this.enemy.receiveAttack(x, y);
    }
  }

  computerAttack() {
    if (this.myTurn === true) {
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

  changeTurn() {
    this.myTurn = true;
  }
}
