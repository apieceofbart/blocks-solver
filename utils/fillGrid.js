var emptyGrid = require('./grid');

function fillGrid(input) {

    //by default we setup a bigger grid than input because we need a space on the left and right for future moves
    //good default seems to be to get 2 additional empty spaces on the left and on the right    
    //height should be the same as inputs height - no way we would need more



    //place the input on the ground in the middle
    //we assume input is a 2 dimensional array and its size is less than grid

    if (input) {
        var grid = emptyGrid(input[0].length + 4, input.length);

        var gridHeight = grid.length,
            gridWidth = grid[0].length;

        var height = input.length,
            width = input[0].length;
        var gridY = gridHeight - 1;

        for (var y = height - 1; y >= 0; y--) {
            for (var x = 0; x < width; x++) {
                grid[gridY][Math.floor((gridWidth - width) / 2) + x] = input[y][x];
            }
            gridY--;
        }

    } else grid = [];

    return grid;
}

module.exports = fillGrid;
