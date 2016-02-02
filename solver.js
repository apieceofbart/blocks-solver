var deepEqual = require('deeper');
var collapse = require('./utils/collapse');
var vanish = require('./utils/vanish');
var transpose = require('./utils/transpose');
var emptyGrid = require('./utils/grid');
var clone = require('clone');
var chalk = require('chalk');


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

function swap(grid, x, y, direction) {
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
    var temp = grid[y][x];
    grid[y][x] = grid[y + directions[direction].y][x + directions[direction].x];
    grid[y + directions[direction].y][x + directions[direction].x] = temp;

    return grid;
}

function solve(input, stepsLimit) {

    /* 
        BRUTE FORCE:
        we move each block in possible directions (we only move up if there's a block there)
        from there we clear grid and move again. 
        note: moving is always swaping, sometimes with a block sometimes with air (number 0)
        We stop after fixed steps (e.g. 5) or when the grid is empty
    */

    var grid = fillGrid(input);

    var stepsLimit = stepsLimit || 1;
    var solutions = [];

    var solutions = findSolution(grid, 1);
    //find correct solutions

    console.log('before:',
        solutions)

    /*solutions.filter(function(solution) {

    while (solution.next) {
        if (solution.next === "FINSHED") return true;
        solution = solution.next;
    }
    return false;
})
*/

    console.log('after:', solutions);


    //console.log(solutions[0]);

    return solutions[0];

    function findSolution(grid, stepsLimit) {

        if (stepsLimit === 0) {
            //console.log(chalk.yellow.bgRed(stepsLimit));
            return {
                direction: "STEPS LIMIT"
            };
        }
        if (isEmpty(grid)) return {
            direction: "FINISHED"
        };
        var solutions = [];
        var height = grid.length,
            width = grid[0].length;
        for (var y = height - 1; y >= 0; y--) {
            for (var x = 0; x < width; x++) {
                var possibleMoves = [];

                if (grid[y][x] !== 0) {
                    if ((x < width - 1) && (grid[y][x] !== grid[y][x + 1])) {
                        possibleMoves.push("right");
                    }
                    /*         if ((x > 0) && (grid[y][x] !== grid[y][x - 1])) {
             possibleMoves.push("left");
         }
         if ((y > 0) && (grid[y - 1][x] !== 0) && (grid[y - 1][x] !== grid[y][x])) {
             possibleMoves.push("up");
         }
         if ((y < height - 1) && (grid[y + 1][x] !== grid[y][x])) {
             possibleMoves.push("down");
         }
*/
                    if (possibleMoves.length > 0) {
                        possibleMoves.forEach(function(move) {
                            //we have a new possible solution 
                            //console.log('adding possible move:', x, ' ', y, ', move:', move);
                            solutions.push([{
                                x: x,
                                y: y,
                                direction: move
                            }].concat(findSolution(clearGrid(swap(grid, x, y, move)), stepsLimit - 1)));

                        })
                    }
                }

            }
        }

        return solutions;
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
    solve: solve
}
