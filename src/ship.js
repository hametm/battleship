function Ship(position) {
    const length = position.length;
    const hitPositions = [];
    const hit = (num) => {
        hitPositions.push(num);
    }
    const isSunk = (positionTest, hitPositionsTest) => {
        if (hitPositionsTest.length === positionTest.length && positionTest) return true;
    }
    return { length, position, hitPositions, hit, isSunk };
}

export { Ship };