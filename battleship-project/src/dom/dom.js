import "./style.css";
import { newGame } from "./startGame";

const computerBoard = document.querySelector(".computerGrid");
const playerBoard = document.querySelector(".playerGrid");
export const newGameButton = document.querySelector(".newGame");
export const statusbar = document.querySelector(".statusBar");

function createGrid(element) {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    if (i < 10) {
      div.setAttribute("data", `0${i}`);
    } else {
      div.setAttribute("data", i);
    }
    element.append(div);
  }
}

createGrid(computerBoard);
createGrid(playerBoard);

export const computerGridElements =
  document.querySelectorAll(".computerGrid div");

function hover(element) {
  element.forEach((div) => {
    div.addEventListener("mouseover", (color) => {
      color.currentTarget.style.backgroundColor = "blue";
    });
  });

  element.forEach((div) => {
    div.addEventListener("mouseout", (color) => {
      color.currentTarget.style.backgroundColor = "";
    });
  });
}

hover(computerGridElements);

const newG = newGame();
