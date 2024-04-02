import { newGameButton } from "./dom";
import { gameLoop } from "..";
import { computerGridElements } from "./dom";
import { playerGridElements } from "./dom";
import { statusbar } from "./dom";
import { randomize } from "./randomize";
import { computerBoard } from "./dom";
import { placeXonScreen } from "./dom";

let newGame = undefined;

export function startNewGame() {
  newGameButton.addEventListener("click", () => {
    newGame = gameLoop();
    remove();
    computerGridElements.forEach((element) => {
      element.style.backgroundColor = "";
      element.textContent = "";
    });
    playerGridElements.forEach((element) => {
      element.style.backgroundColor = "";
      element.textContent = "";
    });

    const random = randomize(newGame);

    addListener();
  });
}

export function placeShips(x, y, direction, board, grid, ship, game) {
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
  placeXonScreen(item, "computerGrid");
  const itemToAttack = item.split("");
  const x = Number(itemToAttack[0]);
  const y = Number(itemToAttack[1]);

  if (game.gameBoardComputer.gameBoard[x][y] !== "x") {
    game.player1.playerAttack(x, y);
    if (game.checkIfGameOver()) {
      statusbar.textContent = game.checkIfGameOver();
    }
    const coordinateComputerAttack = game.computer.computerAttack();

    placeXonScreen(coordinateComputerAttack, "playerGrid");
    if (game.checkIfGameOver()) {
      statusbar.textContent = game.checkIfGameOver();
      remove();
    }
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
