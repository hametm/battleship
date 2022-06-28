import { Gameboard } from "./gameboard";
import { Player } from "./player";

function displayBoard(gameboard) {
    const name = document.createElement("h1");
    name.textContent = `${gameboard.player.name}`;
    const canvas = document.getElementById("canvas");
    canvas.appendChild(name);
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < gameboard.positions.length; i++) {
        const space = document.createElement("div");
        space.classList.add("space");
        space.classList.add(`${gameboard.player.name}`);
        space.dataset.id = `${gameboard.positions[i]}`;
        board.appendChild(space);
        canvas.appendChild(board);
        if (gameboard.ship1.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken1");
        }
        if (gameboard.ship2.position.includes(space.dataset.id)) {
            space.classList.add("taken","taken2");
        }
        if (gameboard.ship3.position.includes(space.dataset.id)) {
            space.classList.add("taken","taken3");
        }
        if (gameboard.ship4.position.includes(space.dataset.id)) {
            space.classList.add("taken","taken4");
        }
    }
}

function hideGameboard(gameboard) {
    const spaces = document.querySelectorAll(".taken");
    spaces.forEach(space => {
        if (space.classList.contains(`${gameboard.player.name}`)) {
            space.classList.remove("taken1", "taken2", "taken3", "taken4");
        }
    })

}

function pickSpace(opponent, attack) {
    const opponentSpaces = document.querySelectorAll(`.${opponent.name}`);
    opponentSpaces.forEach(space => {
        space.onclick = () => {
             attack = space.textContent;
        }
    })
}

function markAttack(opponent, attack, gameboard) {
    const opponentSpaces = document.querySelectorAll(`.${opponent.name}`);
    for (let i = 0; i < gameboard.shipList.length; i++) {
        // console.log("Hit positions: " + gameboard.shipList[i].hitPositions);
        opponentSpaces.forEach(space => {
            if (gameboard.shipList[i].hitPositions.includes(space.dataset.id)) {
                space.style.backgroundColor = "red";
            } else if (space.dataset.id === attack) {
                space.classList.add("missed");
                if (space.innerHTML === "") {
                    const dot = document.createElement("div");
                    dot.classList.add("dot");
                    space.appendChild(dot);
                }
            }
        })
    }
    // opponentSpaces.forEach(space => {
    //     if (space.textContent === attack) {
    //         space.classList.add("missed");
    //         const dot = document.createElement("div");
    //         dot.classList.add("dot");
    //         space.appendChild(dot);
    //     }
        
    // })
}

function announceWinner(gameboard) {
    if (gameboard.checkIfSunk()) {
        const canvas = document.getElementById("canvas");
        const announcement = document.createElement("h1");
        announcement.textContent = `${gameboard.player.name} loses`;
        canvas.appendChild(announcement);
    }
}



export { displayBoard, hideGameboard, pickSpace, markAttack, announceWinner };