import { GameBoard } from "./gameBoard";

export class Player {
  constructor(enemy, ownBoard) {
    this.enemy = enemy;
    this.ownBoard = ownBoard;
    this.usedCoordinates = [];
  }

  playerAttack(x, y) {
    this.enemy.receiveAttack(x, y);
    this.ownBoard.changeTurn();
  }

  computerAttack() {
    let coordinate = Math.floor(Math.random() * 100);

    while (this.usedCoordinates.includes(coordinate)) {
      coordinate = Math.floor(Math.random() * 100);
    }
    this.usedCoordinates.push(coordinate);

    let x = Number(coordinate.toString().split("")[0]);
    let y = Number(coordinate.toString().split("")[1]);

    this.enemy.receiveAttack(x, y);
    this.ownBoard.changeTurn();

    return coordinate;
  }
}
