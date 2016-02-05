var emptyGrid = require('./grid');

function fillGrid(input) {

    //by default we setup a big grid
    //we need a space on the left and right for future moves
    //10x5 should be ok

    var grid = emptyGrid();

    var gridHeight = grid.length,
        gridWidth = grid[0].length;

    //place the input on the ground in the middle
    //we assume input is a 2 dimensional array and its size is less than grid

    if (input) {
        var height = input.length,
            width = input[0].length;
        var gridY = gridHeight - 1;

        for (var y = height - 1; y >= 0; y--) {
            for (var x = 0; x < width; x++) {
                grid[gridY][Math.floor((gridWidth - width) / 2) + x] = input[y][x];
            }
            gridY--;
        }

    }

    return grid;
}

module.exports = fillGrid;
