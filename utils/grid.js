module.exports = function(width, height) {

    var grid = [];
    var width = width || 10,
        height = height || 6;

    for (var i = 0; i < height; i++) {
        grid[i] = [];
        for (var j = 0; j < width; j++) {
            grid[i].push(0);
        }
    }

    return grid;
}
