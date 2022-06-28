import { Gameboard } from "./gameboard";

function Player(name) {
    let score = 0;
    let attackList = [];
    let addAttack = (currentAttack) => {
        attackList.push(currentAttack);
    }
    let attack = (Gameboard) => {
        let currentMove = Gameboard.positions[Math.floor(Math.random() * (Gameboard.positions.length - 1))];
        while (attackList.includes(currentMove)) {
            currentMove = Gameboard.positions[Math.floor(Math.random() * (Gameboard.positions.length - 1))];
        }
        attackList.push(currentMove);
        return currentMove;
    }

    return { name, score, attack, addAttack, attackList };
}

export { Player };