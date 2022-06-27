function Ship(position) {
    const length = position.length;
    const hitPositions = [];
    const hit = (num) => {
        hitPositions.push(num);
    }
    const isSunk = () => {
        if (hitPositions.length === length) return true;
    }
    return { length, position, hitPositions, hit, isSunk };
}

const Gameboard = (() => {
    const letterString = "ABCDEFGHIJ";
    const letters = letterString.split("");
    const numberString = "1,2,3,4,5,6,7,8,9,10";
    const numbers = numberString.split(",");
    const positions = [];

    const pickPositions = () => {
        let shipPositions = [];
        let length = Math.floor(Math.random() * 5 + 1);
        let letterPositions = [];
        let numberPositions = [];
        let letterStart = letters[Math.floor(Math.random() * letters.length)];
        let numberStart = numbers[Math.floor(Math.random() * numbers.length)];

        // let direction = Math.floor(Math.random() * 2 + 1);
        let direction = 2;
        if (direction === 1) {
            for (let i = 0; i < length; i++) {
                numberPositions.push(numberStart);
            }
        } 
        if (direction === 2) {
            let numberIndex = Number(numberStart);
            numberPositions.push(numberStart);
            letterPositions.push(letterStart);
            if ((numberIndex + (length - 1)) > 10) {
                length = 11 - numberIndex;
            }
            for (let i = 0; i < length - 1; i++) {
                letterPositions.push(letterStart);
                numberPositions.push(String(numberIndex + 1));
                numberIndex++;
            }
            for (let i = 0; i < length; i++) {
                let position = letterPositions[i] + numberPositions[i];
                shipPositions.push(position);
            }
            let newShip = Ship(shipPositions);
            console.log(newShip.position);
        }
    }
 
    // const pickPositions = () => {
    //     // let length = Math.floor(Math.random() * 4);
    //     let index = Math.floor(Math.random() * positions.length);
    //     shipPositions.push([positions[index], positions[index + 1], positions[index + 2]]);
    //     positions.splice(index, 3);
    // }
    return { 
        displayShips: () => {
            for (let i = 0; i < 5; i++) {
                pickPositions();
            }
        },
        displayBoard: () => {
            for (let i = 0; i < letters.length; i++) {
                for (let j = 0; j < numbers.length; j++) {
                    let position = String(letters[i]) + String(numbers[j]);
                    positions.push(position);
                }
            }
            console.log(positions);
    } 
};
})();

Gameboard.displayShips();

// export { Ship, Gameboard }
