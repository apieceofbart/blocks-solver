function isEmpty(grid) {
    var empty = true;
    grid.forEach(function(row) {
        row.forEach(function(el) {
            if (el !== 0) empty = false;
        })
    })
    return empty;

}

module.exports = isEmpty;
