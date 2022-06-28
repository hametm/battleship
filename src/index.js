import './style.css';
import { Player } from './player';
import { Gameboard } from './gameboard';
import { displayBoard } from './DOM';
import { Ship } from './ship';

function playGame() {
    const quentin = Player("quentin");
    const computer = Player("computer");
    const quentinBoard = Gameboard(quentin);
    const computerBoard = Gameboard(computer);
    displayBoard(quentinBoard);
    displayBoard(computerBoard);

}

playGame();

