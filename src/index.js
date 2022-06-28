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
    displayBoard(player1Board);
    displayBoard(player2Board);
    player1Board.receiveAttack(player1.attack);
    player2Board.receiveAttack(player2.attack);
    markAttack(player2, player1.attack(player2Board));
    markAttack(player1, player2.attack(player1Board));
}

playGame();

