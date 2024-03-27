import { Ship } from "./index.js";
import { GameBoard } from "./gameBoard.js";

test("Times hit to be less than length of ship", () => {
  const testShip = new Ship(5);
  for (let i = 4; i > 0; i--) {
    testShip.hit();
  }
  expect(testShip.length).toBeGreaterThan(testShip.timesHit);
});

test("Ship is sunk when times hit equals length of ship", () => {
  const testShip = new Ship(5);
  for (let i = 5; i > 0; i--) {
    testShip.hit();
  }
  if (testShip.length === testShip.timesHit) {
    testShip.isSunk();
  }
  expect(testShip.sunk).toBe(true);
});

test("Gameboard length is 10 by 10", () => {
  const gameBoardObj = new GameBoard();
  expect(gameBoardObj.gameBoard.length).toBe(10);
  expect(gameBoardObj.gameBoard[0].length).toBe(10);
});

test("Place ship horizontaly on gameBoard", () => {
  const gameBoardObj = new GameBoard();
  const newShip = new Ship(5);
  gameBoardObj.placeShip(1, 0, "horizontal", newShip.length);
  expect(gameBoardObj.gameBoard[1].slice(0, 5)).toEqual([1, 1, 1, 1, 1]);
});
