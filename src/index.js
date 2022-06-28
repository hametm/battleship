import './style.css';
import { Player } from './player';
import { Gameboard } from './gameboard';
import { displayBoard, markAttack } from './DOM';
import { Ship } from './ship';

function playGame() {
    const player1 = Player("quentin");
    const player2 = Player("computer");
    const player1Board = Gameboard(player1);
    const player2Board = Gameboard(player2);
    let player1Attack = player1.attack(player2Board);
    let player2Attack = player2.attack(player1Board);

    displayBoard(player1Board);
    displayBoard(player2Board);

    player1Board.receiveAttack(player1Attack);
    player2Board.receiveAttack(player2Attack);

    markAttack(player2, player1Attack, player2Board);
    markAttack(player1, player2Attack, player1Board);

    player1Board.checkIfSunk();
    player2Board.checkIfSunk();

}

playGame();

