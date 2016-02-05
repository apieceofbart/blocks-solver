var clone = require('./clone');

function swap(grid, x, y, direction) {
    var newGrid = clone(grid);
    var directions = {
        "right": {
            x: 1,
            y: 0
        },
        "left": {
            x: -1,
            y: 0
        },
        "up": {
            x: 0,
            y: -1
        },
        "down": {
            x: 0,
            y: 1
        }
    }
    var temp = newGrid[y][x];
    newGrid[y][x] = newGrid[y + directions[direction].y][x + directions[direction].x];
    newGrid[y + directions[direction].y][x + directions[direction].x] = temp;

    return newGrid;
}
module.exports = swap;
