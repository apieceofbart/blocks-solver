var transpose = require('./transpose');

function collapseRow(row) {
    var len = row.length;
    row = row.join('').replace(/0/g, '');
    while (row.length !== len) {
        row = "0" + row;
    }

    return row.split('').map(function(item) {
        return +item;
    })

}

function collapseGrid(grid) {
    return transpose(transpose(grid).map(function(row) {
        return collapseRow(row);
    }))
}

module.exports = {
    row: collapseRow,
    grid: collapseGrid
}
