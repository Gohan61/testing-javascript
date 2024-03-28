import { Ship } from "./ship.js";

export class GameBoard {
  constructor() {
    this.gameBoard = this.newGameboard();
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.cruiser = new Ship(3);
    this.submarine = new Ship(2);
    this.destroyer = new Ship(1);
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

  receiveAttack(x, y) {
    if (this.gameBoard[x][y] !== 0) {
      this.checkShipType(x, y);
    } else {
      this.gameBoard[x][y] = "x";
    }
  }

  checkShipType(x, y) {
    switch (true) {
      case this.gameBoard[x][y] === 5:
        this.carrier.hit();
        break;
      case this.gameBoard[x][y] === 4:
        this.battleship.hit();
        break;
      case this.gameBoard[x][y] === 3:
        this.cruiser.hit();
        break;
      case this.gameBoard[x][y] === 2:
        this.submarine.hit();
        break;
      case this.gameBoard[x][y] === 1:
        this.destroyer.hit();
        break;
    }
  }

  checkIfAllShipsSunk() {
    if (
      this.carrier.isSunk() &&
      this.battleship.isSunk() &&
      this.cruiser.isSunk() &&
      this.submarine.isSunk() &&
      this.destroyer.isSunk()
    ) {
      return "All ships have sunk";
    }
  }
}
