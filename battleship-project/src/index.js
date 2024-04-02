import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./player";

export function gameLoop() {
  const gameBoardPlayer1 = new GameBoard();
  const gameBoardComputer = new GameBoard();
  gameBoardComputer.newGameboard();
  gameBoardPlayer1.newGameboard();

  const player1 = new Player(gameBoardComputer, gameBoardPlayer1);
  const computer = new Player(gameBoardPlayer1, gameBoardComputer);

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
