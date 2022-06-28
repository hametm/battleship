import { Gameboard } from "./gameboard";
import { Player } from "./player";

function displayBoard(gameboard) {
    const canvas = document.getElementById("canvas");
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < gameboard.positions.length; i++) {
        const space = document.createElement("div");
        space.classList.add("space");
        space.classList.add(`${gameboard.player.name}`);
        space.textContent = gameboard.positions[i];
        board.appendChild(space);
        canvas.appendChild(board);
        if (gameboard.ship1.position.includes(space.textContent)) {
            space.classList.add("taken1");
        }
        if (gameboard.ship2.position.includes(space.textContent)) {
            space.classList.add("taken2");
        }
        if (gameboard.ship3.position.includes(space.textContent)) {
            space.classList.add("taken3");
        }
        if (gameboard.ship4.position.includes(space.textContent)) {
            space.classList.add("taken4");
        }
    }
}

function markAttack(opponent, attack, gameboard) {
    const opponentSpaces = document.querySelectorAll(`.${opponent.name}`);
    let hitSpace;
    for (let i = 0; i < gameboard.shipList.length; i++) {
        console.log("Hit positions: " + gameboard.shipList[i].hitPositions);
        opponentSpaces.forEach(div => {
            if (gameboard.shipList[i].hitPositions.includes(div.textContent)) {
                div.style.backgroundColor = "red";
            }
        })
    }
    opponentSpaces.forEach(div => {
        if (div.textContent === attack) {
            div.style.border = "1px solid";
        }
        
    })
}

// function markHit(gameboard) {
//     for (let i = 0; i < shipList.length; i++) {
//         if (shipList[i].hitPositions.includes(attack)) {

//         }
//     }
// }

export { displayBoard, markAttack };