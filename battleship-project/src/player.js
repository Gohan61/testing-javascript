import { GameBoard } from "./gameBoard";

export class Player {
  constructor(enemy, ownBoard) {
    this.enemy = enemy;
    this.ownBoard = ownBoard;
  }

  playerAttack(x, y) {
    this.enemy.receiveAttack(x, y);
    this.ownBoard.changeTurn();
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
    this.ownBoard.changeTurn();
  }
}
