import './style.css';
import { Player } from './player';
import { Gameboard } from './gameboard';
import { displayBoard } from './DOM';


const quentin = Player("human");
const computer = Player("computer");

displayBoard();
