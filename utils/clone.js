function clone(grid) {
    var newGrid = [];
    for (var i = 0; i < grid.length; i++) {
        newGrid[i] = []
        for (var j = 0; j < grid[0].length; j++) {
            newGrid[i][j] = grid[i][j];
        }
    }
    return newGrid;

}

module.exports = clone;
