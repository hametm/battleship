function Ship(position) {
    const length = position.length;
    const hitPositions = [];
    const hit = (num) => {
        hitPositions.push(num);
    }
    const isSunk = () => {
        if (hitPositions.length === length) return true;
    }
    return { length, hitPositions, hit, isSunk };
}

const Gameboard = (() => {

    return { 
        displayBoard: () => {
        const letterString = "ABCDEFGHIJ";
        const letters = letterString.split("");
        const numberString = "1,2,3,4,5,6,7,8,9,10";
        const numbers = numberString.split(",");
        const positions = [];
        for (let i = 0; i < letters.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                let position = String(letters[i]) + String(numbers[j]);
                positions.push(position);
            }
        }
        
    } 
};
})();

Gameboard.displayBoard();

// export { Ship, Gameboard }
