import { newGameButton } from "./dom";
import { gameLoop } from "..";
import { computerGridElements } from "./dom";
import { statusbar } from "./dom";

let newGame = undefined;

export function startNewGame() {
  newGameButton.addEventListener("click", () => {
    newGame = gameLoop();
    remove();

    placeShips(
      0,
      0,
      "horizontal",
      "gameBoardComputer",
      ".computerGrid",
      "carrier",
      newGame
    );
    placeShips(
      1,
      0,
      "horizontal",
      "gameBoardComputer",
      ".computerGrid",
      "battleship",
      newGame
    );
    placeShips(
      3,
      0,
      "horizontal",
      "gameBoardComputer",
      ".computerGrid",
      "cruiser",
      newGame
    );
    placeShips(
      4,
      1,
      "vertical",
      "gameBoardComputer",
      ".computerGrid",
      "submarine",
      newGame
    );
    placeShips(
      7,
      6,
      "horizontal",
      "gameBoardComputer",
      ".computerGrid",
      "destroyer",
      newGame
    );

    placeShips(
      0,
      0,
      "horizontal",
      "gameBoardPlayer1",
      ".playerGrid",
      "carrier",
      newGame
    );
    placeShips(
      1,
      0,
      "horizontal",
      "gameBoardPlayer1",
      ".playerGrid",
      "battleship",
      newGame
    );
    placeShips(
      3,
      0,
      "horizontal",
      "gameBoardPlayer1",
      ".playerGrid",
      "cruiser",
      newGame
    );
    placeShips(
      4,
      5,
      "vertical",
      "gameBoardPlayer1",
      ".playerGrid",
      "submarine",
      newGame
    );
    placeShips(
      7,
      6,
      "horizontal",
      "gameBoardPlayer1",
      ".playerGrid",
      "destroyer",
      newGame
    );

    addListener();
  });
}

function placeShips(x, y, direction, board, grid, ship, game) {
  const shipLength = game[board][ship].length;
  const nodePoint = Number(`${x}${y}`);

  if (ship === "destroyer") {
    const element = document.querySelector(
      `${grid} div:nth-child(${nodePoint + 1})`
    );

    colorShips(element, ship);
    game[board].placeShip(x, y, direction, game[board][ship].length);
  } else if (direction === "horizontal") {
    if (y >= 6 && shipLength + y > 10) {
      statusbar.textContent = "Ship does not fit board";
    } else {
      if (x < 1) {
        for (let i = 1; i < shipLength + 1; i++) {
          const element = document.querySelector(
            `${grid} div:nth-child(${y + i})`
          );
          colorShips(element, ship);
          game[board].placeShip(x, y, direction, game[board][ship].length);
        }
      } else {
        for (let i = 1; i < shipLength + 1; i++) {
          const element = document.querySelector(
            `${grid} div:nth-child(${nodePoint + i})`
          );
          colorShips(element, ship);
          game[board].placeShip(x, y, direction, game[board][ship].length);
        }
      }
    }
  } else if (direction === "vertical") {
    if (x >= 6 && shipLength + x > 10) {
      statusbar.textContent = "Ship does not fit board";
    } else {
      const element1 = document.querySelector(
        `${grid} div:nth-child(${nodePoint + 1})`
      );
      for (let i = 2; i < shipLength + 1; i++) {
        let increment = Number(`${i}0` - 10);

        const element2 = document.querySelector(
          `${grid} div:nth-child(${nodePoint + increment + 1})`
        );
        colorShips(element1, ship);
        colorShips(element2, ship);
        game[board].placeShip(x, y, direction, game[board][ship].length);
      }
    }
  }
}

function colorShips(element, ship) {
  const carrier = "#b30000";
  const battleship = "#e68a00";
  const cruiser = "#008000";
  const submarine = "#0000b3";
  const destroyer = "#e6e600";

  switch (true) {
    case ship === "carrier":
      element.style.backgroundColor = carrier;
      break;
    case ship === "battleship":
      element.style.backgroundColor = battleship;
      break;
    case ship === "cruiser":
      element.style.backgroundColor = cruiser;
      break;
    case ship === "submarine":
      element.style.backgroundColor = submarine;
      break;
    case ship === "destroyer":
      element.style.backgroundColor = destroyer;
      break;
  }
}

export function attack(game, item) {
  const itemToAttack = item.split("");
  const x = Number(itemToAttack[0]);
  const y = Number(itemToAttack[1]);

  game.player1.playerAttack(x, y);
  if (game.checkIfGameOver()) {
    statusbar.textContent = game.checkIfGameOver();
  }
  setTimeout(game.computer.computerAttack(), 1000);
  if (game.checkIfGameOver()) {
    statusbar.textContent = game.checkIfGameOver();
    remove();
  }
}

function addListener() {
  computerGridElements.forEach((item) => {
    item.addEventListener("click", wait);
  });
}

function wait(item) {
  const itemToAttack = item.target.getAttribute("data");

  attack(newGame, itemToAttack);
}

function remove() {
  computerGridElements.forEach((item) => {
    item.removeEventListener("click", wait);
  });
}
