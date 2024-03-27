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
        this.gameBoard[x].fill(length, y, y + length);
      }
    }
    if (direction === "vertical") {
      if (this.checkIfBoardEmpty(x, y, length) === true) {
        for (let i = 0; i < length; i++) {
          this.gameBoard[x][y] = length;
          this.gameBoard[x + i][y] = length;
        }
      }
    }
  }

  checkIfBoardEmpty(x, y, length) {
    for (let i = 0; i < length; i++) {
      if (this.gameBoard[x][y] !== 0) {
        return false;
      } else if (this.gameBoard[x + i][y] !== 0) {
        return false;
      }
    }
    return true;
  }
}
