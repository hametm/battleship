import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { playRound } from "./game";

const player1 = Player("you");
const player2 = Player("computer");
const player1Board = Gameboard(player1);
const player2Board = Gameboard(player2);
displayBoard(player1Board);
displayBoard(player2Board);
hideGameboard(player2Board);

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

function pickSpace() {
    const computerSpaces = document.querySelectorAll(".computer");
    computerSpaces.forEach(space => {
        space.onclick = () => {
            player1.attack = space.dataset.id;
            getComputerAttack(player2, player1Board);
            playRound(player1, player2, player1Board, player2Board);
        }
    })
}

function getComputerAttack(player, gameboard) {
    let currentMove = gameboard.positions[Math.floor(Math.random() * (gameboard.positions.length - 1))];
    while (player.attackList.includes(currentMove)) {
        currentMove = gameboard.positions[Math.floor(Math.random() * (gameboard.positions.length - 1))];
    }
    player.attackList.push(currentMove);
    player.attack = currentMove;
}

function markAttack(opponent, attack, gameboard) {
    const opponentSpaces = document.querySelectorAll(`.${opponent.name}`);
    for (let i = 0; i < gameboard.shipList.length; i++) {
        opponentSpaces.forEach(space => {
            if (gameboard.shipList[i].hitPositions.includes(space.dataset.id)) {
                space.classList.add("hit");
            } 
        })
    }
    opponentSpaces.forEach(space => {
        if (space.dataset.id === attack && !(space.classList.contains("hit"))) {
            space.classList.add("missed");
            const dot = document.createElement("div");
            dot.classList.add("dot");
            space.appendChild(dot);
        }
    })
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