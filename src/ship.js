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

export { Ship };