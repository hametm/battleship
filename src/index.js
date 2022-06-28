import './style.css';
import { Player } from './player';
import { Gameboard } from './gameboard';
import { displayBoard, hideGameboard, pickSpace, markAttack, announceWinner } from './DOM';
import { Ship } from './ship';


const player1 = Player("you");
const player2 = Player("computer");
const button = document.querySelector("button");
const player1Board = Gameboard(player1);
const player2Board = Gameboard(player2);
displayBoard(player1Board);
displayBoard(player2Board);
hideGameboard(player2Board);

button.onclick = () => {
    playRound();
}

function playRound() {
    let player1Attack = player1.attack(player2Board);
    player1.addAttack(player1Attack);
    let player2Attack = player2.attack(player1Board);
    player2.addAttack(player2Attack);

    player2Board.receiveAttack(player1Attack);
    player1Board.receiveAttack(player2Attack);

    markAttack(player2, player1Attack, player2Board);
    markAttack(player1, player2Attack, player1Board);

    player1Board.checkIfSunk();
    player2Board.checkIfSunk();

    announceWinner(player1Board);
    announceWinner(player2Board);
}



