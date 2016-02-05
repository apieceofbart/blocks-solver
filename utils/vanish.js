var deepEqual = require('deeper');
var transpose = require('./transpose');

function vanishGrid(grid) {


    /*
        go through each row and mark the cell that should disappear
        then go through each column and do the same
        combine the two
    */

    var vanishRows = grid.map(function(row) {
        return vanishRow(row);
    })

    var vanishColumns = transpose(transpose(grid).map(function(col) {
        return vanishRow(col);
    }));

    var height = grid.length,
        width = grid[0].length;

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (vanishRows[i][j] === 0 || vanishColumns[i][j] === 0) grid[i][j] = 0;
        }
    }

    return grid;
}

function vanishRow(row) {
    var output = [];
    var i = 0;
    while (i < row.length) {
        output[i] = row[i];
        if (row[i] !== 0) {
            var num = row[i];
            counter = 1;
            while (row[i + counter] === num) {
                counter++;
            }
            if (counter >= 3) {
                //remove the block of numbers from i to i + counter
                for (var j = i; j < i + counter; j++) {
                    output[j] = 0;
                }
                i += counter - 1;
            }

        }
        i++;
    }

    return output;
}

module.exports = {
    row: vanishRow,
    grid: vanishGrid
}
