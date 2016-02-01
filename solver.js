var deepEqual = require('deeper');
var collapse = require('./utils/collapse');
var vanish = require('./utils/vanish');
var transpose = require('./utils/transpose');


function fillGrid(input) {

    //by default we setup a big grid
    //we need a space on the left and right for future moves
    //12x7 should be ok

    var grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    var gridHeight = grid.length,
        gridWidth = grid[0].length;



    //place the input on the ground in the middle
    //we assume input is a 2 dimensional array and its size is less than grid

    if (input) {
        var height = input.length,
            width = input[0].length;
        var gridY = gridHeight - 1;

        for (var y = height - 1; y >= 0; y--) {
            for (x = 0; x < width; x++) {
                grid[gridY][Math.floor((gridWidth - width) / 2) + x] = input[y][x];
            }
            gridY--;
        }

    }

    return grid;
}


function findSolution(input) {

    var grid = fillGrid(input);


}

function clearGrid(grid) {

    /* 
    	cleaning is a 2 step process:

    	1) we look for any blocks that are hanging in the air, e.g. if there's no block benath the block should fall down
    	2) we look for groups of the same object, group is a vertical or horizontal line with min. length of 3. 
    		If we find such group we remove all the blocks form the group and go to step 1.
    	
    	we loop until there are no hanging block or groups

    */
    var oldGrid;

    do {
        oldGrid = grid;
        grid = vanish.grid(collapse.grid(oldGrid));
    } while (!deepEqual(oldGrid, grid))

    return grid;
}


module.exports = {
    fillGrid: fillGrid,
    clearGrid: clearGrid
}
