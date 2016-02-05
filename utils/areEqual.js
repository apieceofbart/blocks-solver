function areEqual(grid1, grid2) {
    //we assume they're both same size
    var equal = true;
    loop:
        for (var i = 0; i < grid1.length; i++) {
            for (var j = 0; j < grid1[0].length; j++) {
                if (grid1[i][j] !== grid2[i][j]) {
                    equal = false;
                    break loop;
                }
            }
        }

    return equal;

}

module.exports = areEqual;
