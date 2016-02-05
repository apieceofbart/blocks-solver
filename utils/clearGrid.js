var clone = require('clone');
var vanish = require('./vanish');
var collapse = require('./collapse');
var deepEqual = require('deeper');

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


module.exports = clearGrid;
