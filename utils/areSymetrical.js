function areSymetrical(move1, move2) {
    if (move1.y === move2.y) {
        if (
            ((move1.x - move2.x === 1) && (move1.direction === "left") && (move2.direction === "right")) ||
            ((move2.x - move1.x === 1) && (move1.direction === "right") && (move2.direction === "left"))
        ) return true;
    }

    if (move1.x === move2.x) {
        if (
            ((move1.y - move2.y === 1) && (move1.direction === "up") && (move2.direction === "down")) ||
            ((move2.y - move1.y === 1) && (move1.direction === "down") && (move2.direction === "up"))
        ) return true;
    }

    return false;
}

module.exports = areSymetrical;
