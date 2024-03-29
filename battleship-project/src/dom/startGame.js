import { newGameButton } from "./dom";
import { gameLoop } from "..";
import { computerGridElements } from "./dom";
import { statusbar } from "./dom";

export function newGame() {
  newGameButton.addEventListener("click", () => {
    const newGame = gameLoop();
  });
}

function placeShips(x, y, direction, board, grid, ship, game) {
  const shipLength = game[board][ship].length;
  const nodePoint = Number(`${x}${y}`);

  if (ship === "destroyer") {
    const element = document.querySelector(
      `${grid} div:nth-child(${y + shipLength})`
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
      for (let i = 1; i < shipLength + 1; i++) {
        let increment = Number(`${i}0`);
        const element = document.querySelector(
          `${grid} div:nth-child(${nodePoint + increment})`
        );
        colorShips(element, ship);
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
    case ship === "battleship":
      element.style.backgroundColor = battleship;
    case ship === "cruiser":
      element.style.backgroundColor = cruiser;
    case ship === "submarine":
      element.style.backgroundColor = submarine;
    case ship === "destroyer":
      element.style.backgroundColor = destroyer;
  }
}
