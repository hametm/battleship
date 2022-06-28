import { Gameboard } from "./gameboard";

function displayBoard() {
    const board = document.getElementById("gameboard");
    for (let i = 0; i < Gameboard.positions.length; i++) {
        const space = document.createElement("div");
        space.textContent = Gameboard.positions[i];
        board.appendChild(space);
        if (Gameboard.ship1.position.includes(space.textContent)) {
            space.classList.add("taken1");
        }
        if (Gameboard.ship2.position.includes(space.textContent)) {
            space.classList.add("taken2");
        }
        if (Gameboard.ship3.position.includes(space.textContent)) {
            space.classList.add("taken3");
        }
        if (Gameboard.ship4.position.includes(space.textContent)) {
            space.classList.add("taken4");
        }
    }
}

export { displayBoard };