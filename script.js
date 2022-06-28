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
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let byLetter = [[],[],[],[],[],[],[],[],[],[]];
    let byNumber = [[],[],[],[],[],[],[],[],[],[]];
    const positions = [];
    const ship1 = Ship([]);
    const ship2 = Ship([]);
    const ship3 = Ship([]);
    const ship4 = Ship([]);


    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            let position = letters[i] + numbers[j];
            positions.push(position);
            getRows(position, i);
            getColumns(position, j);
        }
    }

    function getRows(position, i) {
        if (letters[i] === "A") byLetter[0].push(position);
        if (letters[i] === "B") byLetter[1].push(position);
        if (letters[i] === "C") byLetter[2].push(position);
        if (letters[i] === "D") byLetter[3].push(position);
        if (letters[i] === "E") byLetter[4].push(position);
        if (letters[i] === "F") byLetter[5].push(position);
        if (letters[i] === "G") byLetter[6].push(position);
        if (letters[i] === "H") byLetter[7].push(position);
        if (letters[i] === "I") byLetter[8].push(position);
        if (letters[i] === "J") byLetter[9].push(position);
    }
    
    function getColumns(position, j) {
        if (numbers[j] === 1) byNumber[0].push(position);
        if (numbers[j] === 2) byNumber[1].push(position);
        if (numbers[j] === 3) byNumber[2].push(position);
        if (numbers[j] === 4) byNumber[3].push(position);
        if (numbers[j] === 5) byNumber[4].push(position);
        if (numbers[j] === 6) byNumber[5].push(position);
        if (numbers[j] === 7) byNumber[6].push(position);
        if (numbers[j] === 8) byNumber[7].push(position);
        if (numbers[j] === 9) byNumber[8].push(position);
        if (numbers[j] === 10) byNumber[9].push(position);
    }

    const pickPositions = (ship) => {
        let shipPositions = [];
        let length = Math.floor(Math.random() * 5 + 1);
        let startPosition = positions[Math.floor(Math.random() * positions.length + 1)];
        let outerLetterIndex;
        let innerLetterIndex;
        let outerNumberIndex;
        let innerNumberIndex;
        let direction = Math.floor(Math.random() * 2 + 1);

        // Get letter indices
        for (let i = 0; i < byLetter.length; i++) {
            for (let j = 0; j < byLetter[i].length; j++) {
                if (byLetter[i][j] === startPosition) {
                    outerLetterIndex = i;
                    innerLetterIndex = j;
                }
            }
        }   

        // Get number indices
        for (let i = 0; i < byNumber.length; i++) {
            for (let j = 0; j < byNumber[i].length; j++) {
                if (byNumber[i][j] === startPosition) {
                    outerNumberIndex = i;
                    innerNumberIndex = j;
                }
            }
        }   

        console.log(startPosition);
        console.log("outer: " + outerNumberIndex + "inner: " + innerNumberIndex);
        console.log("outer: " + outerLetterIndex + "inner: " + innerLetterIndex);

        // If horizontal
        if (direction === 1) {
            console.log("by letter");
            let innerIndex = innerLetterIndex;
            let outerIndex = outerLetterIndex;
            shipPositions.push(startPosition);
            if ((innerLetterIndex + (length)) > 10) {
                length = 10 - innerLetterIndex;
            }
            for (let i = 0; i < length - 1; i++) {
                shipPositions.push(byLetter[outerIndex][innerIndex + 1]);
                innerIndex++;
            }
            ship.position = shipPositions;
        }

        // If vertical
        if (direction === 2) {
            console.log("by number");
            let innerIndex = innerNumberIndex;
            let outerIndex = outerNumberIndex;
            shipPositions.push(startPosition);
            if ((innerNumberIndex + (length)) > 10) {
                length = 10 - innerNumberIndex;
            }
            for (let i = 0; i < length - 1; i++) {
                shipPositions.push(byNumber[outerIndex][innerIndex + 1]);
                innerIndex++;
            }
            ship.position = shipPositions;
        }
        console.log(ship.position);
    }

    return { 
        displayShips: () => {
            pickPositions(ship1);
        },
        displayBoard: () => {
           
            console.log(positions);
    } 
};
})();

Gameboard.displayShips();

// export { Ship, Gameboard }
