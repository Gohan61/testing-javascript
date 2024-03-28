import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

export function gameLoop() {
  const gameBoardPlayer1 = new GameBoard();
  const gameBoardComputer = new GameBoard();
  gameBoardComputer.newGameboard();
  gameBoardPlayer1.newGameboard();

  const player1 = new Player(gameBoardComputer);
  const computer = new Player(gameBoardPlayer1);

  player1.myTurn = true;

  if (
    gameBoardPlayer1.checkIfAllShipsSunk() ||
    gameBoardComputer.checkIfAllShipsSunk()
  ) {
    return;
  } else {
    if ((player1.myTurn = true)) {
      computer.myTurn = true;
      player1.myTurn = false;
    } else {
      player1.myTurn = true;
      computer.myTurn = false;
    }
  }
  return { player1, computer, gameBoardPlayer1, gameBoardComputer };
}
