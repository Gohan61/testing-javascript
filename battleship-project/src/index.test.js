import { Ship, battleship, carrier } from "./index.js";
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
  expect(gameBoardObj.gameBoard[1].slice(0, 5)).toEqual([5, 5, 5, 5, 5]);
});

test("Place ship vertically on gameBoard", () => {
  const gameBoardObj = new GameBoard();
  const newShip = new Ship(4);
  gameBoardObj.placeShip(1, 0, "vertical", newShip.length);
  for (let i = 0; i < newShip.length; i++) {
    expect(gameBoardObj.gameBoard[1][0]).toBe(newShip.length);
    expect(gameBoardObj.gameBoard[1 + i][0]).toBe(newShip.length);
  }
});

test("Check if ship is not placed on collision", () => {
  const gameBoardObj = new GameBoard();
  const firstShip = new Ship(5);
  const secondShip = new Ship(3);
  const thirdShip = new Ship(2);
  const fourthShip = new Ship(5);
  const fifthSip = new Ship(2);
  gameBoardObj.placeShip(0, 0, "horizontal", firstShip.length);
  gameBoardObj.placeShip(0, 0, "vertical", secondShip.length);
  gameBoardObj.placeShip(0, 4, "horizontal", thirdShip.length);
  gameBoardObj.placeShip(9, 0, "horizontal", fourthShip.length);
  gameBoardObj.placeShip(8, 0, "vertical", fifthSip.length);
  expect(gameBoardObj.gameBoard[1][0]).toBe(0);
  expect(gameBoardObj.gameBoard[0][6]).toBe(0);
  expect(gameBoardObj.gameBoard[0][4]).toBe(firstShip.length);
  expect(gameBoardObj.gameBoard[8][0]).toBe(0);
});

test("Check if ship is hit", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.placeShip(0, 0, "horizontal", carrier.length);
  gameBoardObj.receiveAttack(0, 0);
  expect(carrier.timesHit).toBe(1);
});

test("Check if missed attack is registered", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.placeShip(0, 0, "vertical", battleship.length);
  gameBoardObj.receiveAttack(0, 1);
  expect(gameBoardObj.gameBoard[0][1]).toBe("x");
});
