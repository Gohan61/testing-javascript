import { Ship } from ".";

export class GameBoard {
  constructor() {
    this.gameBoard = this.newGameboard();
  }
  newGameboard = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Array(10).fill(0));
    }
    return array;
  };

  placeShip(x, y, direction, length) {
    if (direction === "horizontal") {
      if (this.gameBoard[x].slice(y, y + length).every((item) => item === 0)) {
        this.gameBoard[x].fill(1, y, y + length);
      }
    }
    if (direction === "vertical") {
      for (let i = 0; i < length; i++) {
        if (this.gameBoard[x][y] === 1) {
          break;
        } else if (this.gameBoard[x + 1][y] === 1) {
          break;
        } else {
          for (let i = 0; i < length; i++) {
            this.gameBoard[x][y] = 1;
            this.gameBoard[x + i][y] = 1;
          }
        }
      }
    }
  }
}
