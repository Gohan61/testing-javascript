import { placeShips } from "./startGame";

export function randomize(newGame) {
  placeShips(
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 4),
    Math.floor(Math.random()) > 0.5 ? "horizontal" : "vertical",
    "gameBoardComputer",
    ".computerGrid",
    "carrier",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 2 + 8),
    Math.floor(Math.random() * 6),
    "horizontal",
    "gameBoardComputer",
    ".computerGrid",
    "battleship",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 6),
    7,
    "horizontal",
    "gameBoardComputer",
    ".computerGrid",
    "cruiser",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 6),
    6,
    "vertical",
    "gameBoardComputer",
    ".computerGrid",
    "submarine",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 2 + 4),
    Math.floor(Math.random() * 2 + 4),
    "horizontal",
    "gameBoardComputer",
    ".computerGrid",
    "destroyer",
    newGame
  );

  placeShips(
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 4),
    Math.floor(Math.random()) > 0.5 ? "horizontal" : "vertical",
    "gameBoardPlayer1",
    ".playerGrid",
    "carrier",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 2 + 8),
    Math.floor(Math.random() * 6),
    "horizontal",
    "gameBoardPlayer1",
    ".playerGrid",
    "battleship",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 6),
    7,
    "horizontal",
    "gameBoardPlayer1",
    ".playerGrid",
    "cruiser",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 6),
    6,
    "vertical",
    "gameBoardPlayer1",
    ".playerGrid",
    "submarine",
    newGame
  );
  placeShips(
    Math.floor(Math.random() * 2 + 4),
    Math.floor(Math.random() * 2 + 4),
    "horizontal",
    "gameBoardPlayer1",
    ".playerGrid",
    "destroyer",
    newGame
  );
}
