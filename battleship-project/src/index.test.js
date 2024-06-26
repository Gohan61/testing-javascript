import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";
import { Player } from "./player.js";
import { gameLoop } from "./index.js";

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
  gameBoardObj.newGameboard();
  expect(gameBoardObj.gameBoard.length).toBe(10);
  expect(gameBoardObj.gameBoard[0].length).toBe(10);
});

test("Place ship horizontaly on gameBoard", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.newGameboard();
  const newShip = new Ship(5);
  gameBoardObj.placeShip(1, 0, "horizontal", newShip.length);
  expect(gameBoardObj.gameBoard[1].slice(0, 5)).toEqual([5, 5, 5, 5, 5]);
});

test("Place ship vertically on gameBoard", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.newGameboard();
  const newShip = new Ship(4);
  gameBoardObj.placeShip(1, 0, "vertical", newShip.length);
  for (let i = 0; i < newShip.length; i++) {
    expect(gameBoardObj.gameBoard[1][0]).toBe(newShip.length);
    expect(gameBoardObj.gameBoard[1 + i][0]).toBe(newShip.length);
  }
});

test("Check if ship is not placed on collision", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.newGameboard();
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
  gameBoardObj.newGameboard();
  gameBoardObj.placeShip(0, 0, "horizontal", gameBoardObj.carrier.length);
  gameBoardObj.receiveAttack(0, 0);
  expect(gameBoardObj.carrier.timesHit).toBe(1);
});

test("Check if missed attack is registered", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.newGameboard();
  gameBoardObj.placeShip(0, 0, "vertical", gameBoardObj.battleship.length);
  gameBoardObj.receiveAttack(0, 1);
  expect(gameBoardObj.gameBoard[0][1]).toBe("x");
});

test("Check if all ships sunk", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.newGameboard();
  const playerObj = new Player(gameBoardObj, gameBoardObj);
  gameBoardObj.placeShip(0, 0, "horizontal", gameBoardObj.destroyer.length);
  gameBoardObj.placeShip(1, 0, "horizontal", gameBoardObj.submarine.length);
  gameBoardObj.placeShip(2, 0, "horizontal", gameBoardObj.cruiser.length);
  gameBoardObj.placeShip(3, 0, "horizontal", gameBoardObj.battleship.length);
  gameBoardObj.placeShip(5, 1, "horizontal", gameBoardObj.carrier.length);
  playerObj.playerAttack(0, 0);
  playerObj.playerAttack(1, 0);
  playerObj.playerAttack(1, 1);
  playerObj.playerAttack(2, 0);
  playerObj.playerAttack(2, 1);
  playerObj.playerAttack(2, 2);
  playerObj.playerAttack(3, 0);
  playerObj.playerAttack(3, 1);
  playerObj.playerAttack(3, 2);
  playerObj.playerAttack(3, 3);
  playerObj.playerAttack(5, 1);
  playerObj.playerAttack(5, 1);
  playerObj.playerAttack(5, 2);
  playerObj.playerAttack(5, 3);
  playerObj.playerAttack(5, 4);
  expect(gameBoardObj.checkIfAllShipsSunk()).toBe(true);
});

test("Computer attacking player", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.newGameboard();
  const playerObj = new Player(gameBoardObj, gameBoardObj);
  playerObj.computerAttack();
  const possibleAttacks = [1, 2, 3, 4, 5, "x"];

  for (let i = 0; i < 10; i++) {
    if (playerObj.enemy.gameBoard[i].every((item) => item !== 0)) {
      expect(
        possibleAttacks.some((x) => playerObj.enemy.gameBoard[i].includes(x))
      ).toBe(true);
    }
  }
});

test("Computer does not generate same coordinate twice", () => {
  const gameBoardObj = new GameBoard();
  gameBoardObj.newGameboard();
  const playerObj = new Player(gameBoardObj, gameBoardObj);
  for (let i = 0; i < 100; i++) {
    playerObj.computerAttack();
  }

  for (let i = 0; i < 10; i++) {
    expect(playerObj.enemy.gameBoard[i].every((item) => item !== 0));
  }
});

test("Game loops correctly between player and computer", () => {
  const game = gameLoop();
  game.gameBoardComputer.placeShip(
    1,
    1,
    "horizontal",
    game.gameBoardComputer.destroyer.length
  );
  game.player1.playerAttack(0, 0);
  game.computer.computerAttack();
  game.computer.computerAttack();
  game.player1.playerAttack(1, 1);

  expect(game.gameBoardComputer.gameBoard[1][1]).toBe(1);
});

test("Game returns correct winner (player1)", () => {
  const game = gameLoop();
  game.gameBoardComputer.placeShip(
    0,
    0,
    "horizontal",
    game.gameBoardComputer.destroyer.length
  );
  game.gameBoardComputer.placeShip(
    1,
    0,
    "horizontal",
    game.gameBoardComputer.submarine.length
  );
  game.gameBoardComputer.placeShip(
    2,
    0,
    "horizontal",
    game.gameBoardComputer.cruiser.length
  );
  game.gameBoardComputer.placeShip(
    3,
    0,
    "horizontal",
    game.gameBoardComputer.battleship.length
  );
  game.gameBoardComputer.placeShip(
    5,
    1,
    "horizontal",
    game.gameBoardComputer.carrier.length
  );

  game.player1.playerAttack(0, 0);
  game.computer.computerAttack();
  game.player1.playerAttack(1, 0);
  game.computer.computerAttack();
  game.player1.playerAttack(1, 1);
  game.computer.computerAttack();
  game.player1.playerAttack(2, 0);
  game.computer.computerAttack();
  game.player1.playerAttack(2, 1);
  game.computer.computerAttack();
  game.player1.playerAttack(2, 2);
  game.computer.computerAttack();
  game.player1.playerAttack(3, 0);
  game.computer.computerAttack();
  game.player1.playerAttack(3, 1);
  game.computer.computerAttack();
  game.player1.playerAttack(3, 2);
  game.computer.computerAttack();
  game.player1.playerAttack(3, 3);
  game.computer.computerAttack();
  game.player1.playerAttack(5, 1);
  game.checkIfGameOver();
  game.computer.computerAttack();
  game.player1.playerAttack(5, 1);
  game.computer.computerAttack();
  game.player1.playerAttack(5, 2);
  game.computer.computerAttack();
  game.player1.playerAttack(5, 3);
  game.computer.computerAttack();
  game.player1.playerAttack(5, 4);
  game.checkIfGameOver();

  expect(game.checkIfGameOver()).toBe("Player 1 wins");
});
