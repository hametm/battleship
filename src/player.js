import { Gameboard } from "./gameboard";

function Player(name) {
    let score = 0;
    let attackList = [];
    let addAttack = (currentAttack) => {
        attackList.push(currentAttack);
    }
    let attack;
    return { name, score, attack, addAttack, attackList };
}

export { Player };