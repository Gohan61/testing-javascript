import "./style.css";
import { newGame, startNewGame } from "./startGame";

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
export const playerGridElements = document.querySelectorAll(".playerGrid div");

function hover(element) {
  element.forEach((div) => {
    div.addEventListener("mouseover", (color) => {
      color.currentTarget.style.border = "blue 1px solid";
      color.currentTarget.style.boxShadow = "inset #dde0ee 15px 15px 15px";
    });
  });

  element.forEach((div) => {
    div.addEventListener("mouseout", (color) => {
      color.currentTarget.style.border = "";
      color.currentTarget.style.boxShadow = "";
    });
  });
}

hover(computerGridElements);

export const newGameObj = startNewGame();
