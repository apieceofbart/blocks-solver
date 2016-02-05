var areEqual = require('./utils/areEqual');
var util = require('util');
var multiFlatten = require('./utils/multiFlatten');
var isEmpty = require('./utils/isEmpty');
var fillGrid = require('./utils/fillGrid');
var clearGrid = require('./utils/clearGrid');
var areSymetrical = require('./utils/areSymetrical');
var swap = require('./utils/swap');

function solve(input, stepsLimit) {

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
            if (areEqual(grid, uniqueGrid.grid) && (stepsLimit < uniqueGrid.step)) add = false;

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
                if (add) uniqueMoves.push(move);
            });

            uniqueMoves.forEach(function(move) {
                var goDeeper = findSolution(clearGrid(swap(grid, move.x, move.y, move.direction)), stepsLimit - 1);
                if (goDeeper !== -1) solutions.push([move].concat(goDeeper));

            });
        }
        return solutions;
    }

}

module.exports = {
    solve: solve
}
