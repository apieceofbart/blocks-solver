var deepEqual = require('deeper');
var collapse = require('./utils/collapse');
var vanish = require('./utils/vanish');
var transpose = require('./utils/transpose');
var emptyGrid = require('./utils/grid');


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

function isEmpty(grid) {
    var empty = true;
    grid.forEach(function(row) {
        row.forEach(function(el) {
            if (el !== 0) empty = false;
        })
    })
    return empty;

}

function findSolution(input) {

    /* 
        BRUTE FORCE:
        we move each block in 3 or possible directions (we only move up if there's a block there)
        from there we clear grid and move again. 
        note: moving is always swaping, sometimes with a block sometimes with air (number 0)
        We stop after fixed steps (e.g. 5) or when the grid is empty
    */

    var grid = fillGrid(input);


    var steps = [];
    var stepsLimit = 1;

    return nextMove(grid, steps);


    function nextMove(grid, path) {
        if (isEmpty(grid)) {
            return path;
        }
        if (path.length > stepsLimit) {
            return -1;
        }
        var height = grid.length,
            width = grid[0].length;

        var moves = 0;

        for (var y = height - 1; y >= 0; y--) {
            for (var x = 0; x < width; x++) {
                if (grid[y][x] !== 0) {
                    //move right
                    if (x < width - 1) {
                        var temp = grid[y][x];
                        grid[y][x] = grid[y][x + 1];
                        grid[y][x + 1] = temp;
                        grid = clearGrid(grid);
                        path.push({
                            x: x,
                            y: y,
                            direction: "right"
                        })
                        return nextMove(grid, path);
                    }
                    //move left
                    /* if (x > 0) {
                         var temp = grid[y][x];
                         grid[y][x] = grid[y][x - 1];
                         grid[y][x - 1] = temp;
                         grid = clearGrid(grid);
                         return grid;
                     }*/

                }
            }

        }
    }

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
    clearGrid: clearGrid,
    isEmpty: isEmpty,
    findSolution: findSolution
}
