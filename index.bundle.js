"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["index"],{

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


class GameBoard {
  constructor() {
    this.gameBoard = [];
    this.carrier = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(5);
    this.battleship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4);
    this.cruiser = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
    this.submarine = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2);
    this.destroyer = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1);
    this.myTurn = false;
  }
  newGameboard = () => {
    for (let i = 0; i < 10; i++) {
      this.gameBoard.push(Array(10).fill(0));
    }
  };

  changeTurn() {
    this.myTurn = false;
  }

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
    if (this.myTurn === false) {
      if (this.gameBoard[x][y] !== 0) {
        this.checkShipType(x, y);
      } else {
        this.gameBoard[x][y] = "x";
      }
      this.myTurn = true;
      this.checkIfAllShipsSunk();
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
      return true;
    }
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameLoop: () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");




function gameLoop() {
  const gameBoardPlayer1 = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
  const gameBoardComputer = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
  gameBoardComputer.newGameboard();
  gameBoardPlayer1.newGameboard();

  const player1 = new _player__WEBPACK_IMPORTED_MODULE_2__.Player(gameBoardComputer, gameBoardPlayer1);
  const computer = new _player__WEBPACK_IMPORTED_MODULE_2__.Player(gameBoardPlayer1, gameBoardComputer);

  if (gameBoardPlayer1.myTurn === false) {
    gameBoardPlayer1.myTurn = true;
    gameBoardComputer.myTurn = false;
  }

  const checkIfGameOver = () => {
    let winner = undefined;
    if (gameBoardPlayer1.checkIfAllShipsSunk()) {
      winner = "Computer wins";
    } else if (gameBoardComputer.checkIfAllShipsSunk()) {
      winner = "You win!";
    }
    return winner;
  };

  return {
    player1,
    computer,
    gameBoardPlayer1,
    gameBoardComputer,
    checkIfGameOver,
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


class Player {
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

    if (coordinate < 10) {
      this.enemy.receiveAttack(0, x);
    } else if (coordinate === 10) {
      this.enemy.receiveAttack(1, 0);
    } else {
      this.enemy.receiveAttack(x, y);
    }
    this.ownBoard.changeTurn();

    return coordinate;
  }
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
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
      return true;
    }
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDOztBQUUxQjtBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsMENBQUk7QUFDM0IsMEJBQTBCLDBDQUFJO0FBQzlCLHVCQUF1QiwwQ0FBSTtBQUMzQix5QkFBeUIsMENBQUk7QUFDN0IseUJBQXlCLDBDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RjhCO0FBQ1U7QUFDTjs7QUFFM0I7QUFDUCwrQkFBK0IsaURBQVM7QUFDeEMsZ0NBQWdDLGlEQUFTO0FBQ3pDO0FBQ0E7O0FBRUEsc0JBQXNCLDJDQUFNO0FBQzVCLHVCQUF1QiwyQ0FBTTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Dd0M7O0FBRWpDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gW107XG4gICAgdGhpcy5jYXJyaWVyID0gbmV3IFNoaXAoNSk7XG4gICAgdGhpcy5iYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gICAgdGhpcy5jcnVpc2VyID0gbmV3IFNoaXAoMyk7XG4gICAgdGhpcy5zdWJtYXJpbmUgPSBuZXcgU2hpcCgyKTtcbiAgICB0aGlzLmRlc3Ryb3llciA9IG5ldyBTaGlwKDEpO1xuICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XG4gIH1cbiAgbmV3R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy5nYW1lQm9hcmQucHVzaChBcnJheSgxMCkuZmlsbCgwKSk7XG4gICAgfVxuICB9O1xuXG4gIGNoYW5nZVR1cm4oKSB7XG4gICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5nYW1lQm9hcmRbeF0uc2xpY2UoeSwgeSArIGxlbmd0aCkuZXZlcnkoKGl0ZW0pID0+IGl0ZW0gPT09IDApKSB7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkW3hdLmZpbGwobGVuZ3RoLCB5LCB5ICsgbGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5jaGVja0lmQm9hcmRFbXB0eSh4LCB5LCBsZW5ndGgpID09PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmdhbWVCb2FyZFt4XVt5XSA9IGxlbmd0aDtcbiAgICAgICAgICB0aGlzLmdhbWVCb2FyZFt4ICsgaV1beV0gPSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0lmQm9hcmRFbXB0eSh4LCB5LCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nYW1lQm9hcmRbeF1beV0gIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVCb2FyZFt4ICsgaV1beV0gIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0aGlzLm15VHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICh0aGlzLmdhbWVCb2FyZFt4XVt5XSAhPT0gMCkge1xuICAgICAgICB0aGlzLmNoZWNrU2hpcFR5cGUoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWVCb2FyZFt4XVt5XSA9IFwieFwiO1xuICAgICAgfVxuICAgICAgdGhpcy5teVR1cm4gPSB0cnVlO1xuICAgICAgdGhpcy5jaGVja0lmQWxsU2hpcHNTdW5rKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTaGlwVHlwZSh4LCB5KSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHRoaXMuZ2FtZUJvYXJkW3hdW3ldID09PSA1OlxuICAgICAgICB0aGlzLmNhcnJpZXIuaGl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLmdhbWVCb2FyZFt4XVt5XSA9PT0gNDpcbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwLmhpdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5nYW1lQm9hcmRbeF1beV0gPT09IDM6XG4gICAgICAgIHRoaXMuY3J1aXNlci5oaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuZ2FtZUJvYXJkW3hdW3ldID09PSAyOlxuICAgICAgICB0aGlzLnN1Ym1hcmluZS5oaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuZ2FtZUJvYXJkW3hdW3ldID09PSAxOlxuICAgICAgICB0aGlzLmRlc3Ryb3llci5oaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZkFsbFNoaXBzU3VuaygpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNhcnJpZXIuaXNTdW5rKCkgJiZcbiAgICAgIHRoaXMuYmF0dGxlc2hpcC5pc1N1bmsoKSAmJlxuICAgICAgdGhpcy5jcnVpc2VyLmlzU3VuaygpICYmXG4gICAgICB0aGlzLnN1Ym1hcmluZS5pc1N1bmsoKSAmJlxuICAgICAgdGhpcy5kZXN0cm95ZXIuaXNTdW5rKClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgY29uc3QgZ2FtZUJvYXJkUGxheWVyMSA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgY29uc3QgZ2FtZUJvYXJkQ29tcHV0ZXIgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIGdhbWVCb2FyZENvbXB1dGVyLm5ld0dhbWVib2FyZCgpO1xuICBnYW1lQm9hcmRQbGF5ZXIxLm5ld0dhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKGdhbWVCb2FyZENvbXB1dGVyLCBnYW1lQm9hcmRQbGF5ZXIxKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKGdhbWVCb2FyZFBsYXllcjEsIGdhbWVCb2FyZENvbXB1dGVyKTtcblxuICBpZiAoZ2FtZUJvYXJkUGxheWVyMS5teVR1cm4gPT09IGZhbHNlKSB7XG4gICAgZ2FtZUJvYXJkUGxheWVyMS5teVR1cm4gPSB0cnVlO1xuICAgIGdhbWVCb2FyZENvbXB1dGVyLm15VHVybiA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY2hlY2tJZkdhbWVPdmVyID0gKCkgPT4ge1xuICAgIGxldCB3aW5uZXIgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGdhbWVCb2FyZFBsYXllcjEuY2hlY2tJZkFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB3aW5uZXIgPSBcIkNvbXB1dGVyIHdpbnNcIjtcbiAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZENvbXB1dGVyLmNoZWNrSWZBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgd2lubmVyID0gXCJZb3Ugd2luIVwiO1xuICAgIH1cbiAgICByZXR1cm4gd2lubmVyO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxheWVyMSxcbiAgICBjb21wdXRlcixcbiAgICBnYW1lQm9hcmRQbGF5ZXIxLFxuICAgIGdhbWVCb2FyZENvbXB1dGVyLFxuICAgIGNoZWNrSWZHYW1lT3ZlcixcbiAgfTtcbn1cbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZW5lbXksIG93bkJvYXJkKSB7XG4gICAgdGhpcy5lbmVteSA9IGVuZW15O1xuICAgIHRoaXMub3duQm9hcmQgPSBvd25Cb2FyZDtcbiAgICB0aGlzLnVzZWRDb29yZGluYXRlcyA9IFtdO1xuICB9XG5cbiAgcGxheWVyQXR0YWNrKHgsIHkpIHtcbiAgICB0aGlzLmVuZW15LnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgdGhpcy5vd25Cb2FyZC5jaGFuZ2VUdXJuKCk7XG4gIH1cblxuICBjb21wdXRlckF0dGFjaygpIHtcbiAgICBsZXQgY29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG5cbiAgICB3aGlsZSAodGhpcy51c2VkQ29vcmRpbmF0ZXMuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgIGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH1cbiAgICB0aGlzLnVzZWRDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuXG4gICAgbGV0IHggPSBOdW1iZXIoY29vcmRpbmF0ZS50b1N0cmluZygpLnNwbGl0KFwiXCIpWzBdKTtcbiAgICBsZXQgeSA9IE51bWJlcihjb29yZGluYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMV0pO1xuXG4gICAgaWYgKGNvb3JkaW5hdGUgPCAxMCkge1xuICAgICAgdGhpcy5lbmVteS5yZWNlaXZlQXR0YWNrKDAsIHgpO1xuICAgIH0gZWxzZSBpZiAoY29vcmRpbmF0ZSA9PT0gMTApIHtcbiAgICAgIHRoaXMuZW5lbXkucmVjZWl2ZUF0dGFjaygxLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmVteS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cbiAgICB0aGlzLm93bkJvYXJkLmNoYW5nZVR1cm4oKTtcblxuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSBudWxsO1xuICAgIHRoaXMuc3VuayA9IG51bGw7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9