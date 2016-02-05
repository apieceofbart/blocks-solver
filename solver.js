var deepEqual = require('deeper');
var collapse = require('./utils/collapse');
var vanish = require('./utils/vanish');
var transpose = require('./utils/transpose');
var emptyGrid = require('./utils/grid');
var clone = require('clone');
var chalk = require('chalk');
var util = require('util');
var flatten = require('./utils/flatten');
var multiFlatten = require('./utils/multiFlatten');


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

function solve(input, stepsLimit) {

    /* 
        BRUTE FORCE:
        we move each block in possible directions with some constraints:
            * stage borders
            * we only swap blocks if they are different (no point swapping same blocks)
            * we don't move block up if there's nothing above him
        
        After that we clear grid and move again. 
        note: moving is always swaping, sometimes with a block sometimes with air (number 0)
        We stop after fixed steps (e.g. 5) or when the grid is empty
    */

    var grid = fillGrid(input);

    var stepsLimit = stepsLimit || 2;
    var possibleSolutions = [],
        theSolution;


    var grids = [];
    var possibleSolutions = findSolution(grid, stepsLimit);

    if (isEmpty(grid)) return possibleSolutions;

    var shortest = +Infinity;

    possibleSolutions.forEach(function(solutionsStartingAtSamePoint) {

        solutionsStartingAtSamePoint = multiFlatten(solutionsStartingAtSamePoint);

        solutionsStartingAtSamePoint.forEach(function(solution) {
            if (Array.isArray(solution) && (solution[solution.length - 1].direction === "FINISHED") && (solution.length < shortest)) {
                theSolution = solution;
                shortest = solution.length;
            }

        })
    });

    if (!theSolution) throw new Error("No solution found, sorry:(");
    theSolution.splice(-1);

    return theSolution;

    function findSolution(grid, stepsLimit) {
        if (isEmpty(grid)) {

            return [
                [{
                    direction: "FINISHED"
                }]
            ];
        }
        if (stepsLimit === 0) {

            return -1;
        }

        var add = true;

        grids.forEach(function(uniqueGrid) {
            if (deepEqual(grid, uniqueGrid.grid) && (stepsLimit < uniqueGrid.step)) add = false;

        });
        if (add) {
            grids.push({
                grid: grid,
                step: stepsLimit
            })
        } else {
            return -1;
        }

        var solutions = [];
        var height = grid.length,
            width = grid[0].length;
        var possibleMoves = [];
        for (var y = height - 1; y >= 0; y--) {
            for (var x = 0; x < width; x++) {


                if (grid[y][x] !== 0) {
                    if ((x < width - 1) && (grid[y][x] !== grid[y][x + 1])) {
                        possibleMoves.push({
                            x: x,
                            y: y,
                            direction: "right"
                        });
                    }
                    if ((x > 0) && (grid[y][x] !== grid[y][x - 1])) {
                        possibleMoves.push({
                            x: x,
                            y: y,
                            direction: "left"
                        });
                    }
                    if ((y > 0) && (grid[y - 1][x] !== 0) && (grid[y - 1][x] !== grid[y][x])) {
                        possibleMoves.push({
                            x: x,
                            y: y,
                            direction: "up"
                        });

                    }
                    if ((y < height - 1) && (grid[y + 1][x] !== grid[y][x])) {
                        possibleMoves.push({
                            x: x,
                            y: y,
                            direction: "down"
                        });
                    }
                }

            }
        }

        if (possibleMoves.length > 0) {

            var uniqueMoves = [];
            possibleMoves.forEach(function(move) {
                //first check if we don't have simetrical moves, e.g. {x:3, y:4, "right"} === {x:4, y:4, "left"}
                var add = true;
                uniqueMoves.forEach(function(uniqueMove) {
                    if (areSymetrical(move, uniqueMove)) add = false;
                })
                if (add) {
                    uniqueMoves.push(move);
                }


            })

            uniqueMoves.forEach(function(move) {
                var goDeeper = findSolution(clearGrid(swap(grid, move.x, move.y, move.direction)), stepsLimit - 1);
                if (goDeeper !== -1) {
                    solutions.push([move].concat(goDeeper));
                }
            })
        }


        return solutions;
    }

}

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

function clearGrid(grid) {
    var newGrid = clone(grid);

    /* 
        cleaning is a 2 step process:

        1) we look for any blocks that are hanging in the air, e.g. if there's no block benath the block should fall down
        2) we look for groups of the same object, group is a vertical or horizontal line with min. length of 3. 
            If we find such group we remove all the blocks form the group and go to step 1.
        
        we loop until there are no hanging block or groups

    */

    var oldGrid;

    do {
        oldGrid = newGrid;
        newGrid = vanish.grid(collapse.grid(oldGrid));
    } while (!deepEqual(oldGrid, newGrid))

    return newGrid;
}


module.exports = {
    fillGrid: fillGrid,
    clearGrid: clearGrid,
    isEmpty: isEmpty,
    solve: solve,
    areSymetrical: areSymetrical
}
