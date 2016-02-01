var deepEqual = require('deeper');
var transpose = require('./transpose');

function vanishGrid(grid) {

    var vanishRows = grid.map(function(row) {
        return vanishRow(row);
    })
    if (deepEqual(vanishRows, grid)) {
        return transpose(transpose(grid).map(function(col) {
            return vanishRow(col);
        }));
    } else {
        return vanishRows;
    }


}

function vanishRow(row) {
    var i = 0;
    while (i < row.length) {
        if (row[i] !== 0) {
            var num = row[i];
            counter = 1;
            while (row[i + counter] === num) {
                counter++;
            }
            if (counter >= 3) {
                //remove the block of numbers from i to i + counter
                for (var j = i; j < i + counter; j++) {
                    row[j] = 0;
                }
                i += counter - 1;
            }

        }
        i++;
    }

    return row;
}

module.exports = {
    row: vanishRow,
    grid: vanishGrid
}
