import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { playRound } from "./game";
import iceCream from "./images/ice-cream.png";
import lollipop from "./images/lollipop.png";
import cat from "./images/cat.png";
import panda from "./images/panda.png";

const player1 = Player("you");
const player2 = Player("computer");
const player1Board = Gameboard(player1);
const player2Board = Gameboard(player2);
displayBoard(player1Board);
displayBoard(player2Board);
hideGameboard(player2Board);

function displayBoard(gameboard) {
    const name = document.createElement("h2");
    name.textContent = `${gameboard.player.name}`;
    const display = document.getElementById("display");

    const board = document.createElement("div");
    const boardContainer = document.createElement("div");
    const numbersAndBoard = document.createElement("div");
    const fullBoard = document.createElement("div");
    const nameAndBoard = document.createElement("div");

    numbersAndBoard.classList.add("numbersAndBoard");
    fullBoard.classList.add("fullBoard", `${gameboard.player.name}Board`);
    board.classList.add("board", `${gameboard.player.name}Spaces`);
    boardContainer.classList.add("boardContainer");
    nameAndBoard.classList.add("nameAndBoard", `${gameboard.player.name}Card`);

    for (let i = 0; i < gameboard.positions.length; i++) {
        const space = document.createElement("div");
        space.classList.add("space");
        space.classList.add(`${gameboard.player.name}`);
        space.dataset.id = `${gameboard.positions[i]}`;
        board.appendChild(space);
        display.appendChild(nameAndBoard);
        if (gameboard.ship1.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken1");
        }
        if (gameboard.ship2.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken2");
        }
        if (gameboard.ship3.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken3");
        }
        if (gameboard.ship4.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken4");
        }
    }

    fullBoard.appendChild(numbersAndBoard);
    boardContainer.appendChild(board);
    nameAndBoard.appendChild(name, fullBoard);

    createLetterRow(fullBoard, nameAndBoard);
    createNumberColumn(numbersAndBoard, fullBoard);

    numbersAndBoard.appendChild(boardContainer);

}

function createLetterRow(container1, container2) {
    const letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const header = document.createElement("div");
    header.classList.add("letterHeader");

    for (let i = 0; i < letters.length; i++) {
        const letterSpace = document.createElement("div");
        letterSpace.textContent = letters[i];
        letterSpace.classList.add("letterSpace");
        header.appendChild(letterSpace);
    }

    container1.appendChild(header);
    container2.appendChild(container1);
}

function createNumberColumn(container1, container2) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const header = document.createElement("div");
    header.classList.add("numberHeader");

    for (let i = 0; i < numbers.length; i++) {
        const numberSpace = document.createElement("div");
        numberSpace.textContent = numbers[i];
        numberSpace.classList.add("numberSpace");
        header.appendChild(numberSpace);
    }

    container1.appendChild(header);
    container2.appendChild(container1);
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
            if (space.classList.contains("hit") || space.classList.contains("missed")) return 0;
            else {
                player1.attack = space.dataset.id;
                getComputerAttack(player2, player1Board);
                playRound(player1, player2, player1Board, player2Board);
            }
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
            space.classList.add("missed", getBackgroundImage());
        }
    })
}

function getBackgroundImage() {
    const backgroundList = ["iceCream", "lollipop", "cat", "panda"];
    let index = Math.floor(Math.random() * 4);
    return backgroundList[index];
}

function resetGame() {
    player1.attackList = [];
    player2.attackList = [];
    for (let i = 0; i < player1Board.shipList.length; i++) {
        player1Board.shipList[i].hitPositions = [];
    }
    for (let i = 0; i < player2Board.shipList.length; i++) {
        player2Board.shipList[i].hitPositions = [];
    }
    const display = document.getElementById("display");
    display.innerHTML = "";
}

function announceWinner(gameboard) {

    if (gameboard.checkIfSunk()) {
        const boards = document.querySelectorAll(".board");
        boards.forEach(board => {
            board.classList.add("loser");
        });

        const display = document.getElementById("display");
        const announcement = document.createElement("div");
        const announcementText = document.createElement("h3");
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play again";
        announcement.classList.add("announcement");

        if (gameboard.player.name === "computer") {
            announcementText.textContent = "You win!";
        }
        if (gameboard.player.name === "you") {
            announcementText.textContent = "The computer wins!";
        }

        announcement.appendChild(announcementText);
        display.appendChild(announcement);

        playAgainBtn.onclick = () => {
            resetGame();
            const player1Board = Gameboard(player1);
            const player2Board = Gameboard(player2);
            displayBoard(player1Board);
            displayBoard(player2Board);
            pickSpace();
        }
    }
}



export { displayBoard, hideGameboard, pickSpace, markAttack, announceWinner };