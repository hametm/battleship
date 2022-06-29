
import { markAttack, announceWinner } from './DOM';

function playRound(player1, player2, player1Board, player2Board) {

    let player1Attack = player1.attack;
    let player2Attack = player2.attack;

    player1.addAttack(player1Attack);
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

export { playRound };

