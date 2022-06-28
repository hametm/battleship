import { Gameboard } from "./gameboard";

function Player(team) {
    let score = 0;
    let attackList = [];
    let attack = () => {
        let currentMove = Gameboard.positions[Math.floor(Math.random() * (Gameboard.positions.length - 1))];
        while (attackList.includes(currentMove)) {
            currentMove = Gameboard.positions[Math.floor(Math.random() * (Gameboard.positions.length - 1))];
        }
        attackList.push(currentMove);
        return currentMove;
    }

    return { score, team, attack };
}

export { Player };