var expect = require('chai').expect;
var emptyGrid = require('../utils/grid');
var fillGrid = require('../utils/fillGrid');
var grid = emptyGrid(1, 4);

describe('fill grid function', function() {

    it('should return the empty grid if input is empty', function() {

        expect(fillGrid()).to.deep.equal([]);
    })

    it('should work for 1 dimensional input of even length', function() {

        var grid = [
            [0, 0, 1, 1, 0, 0]
        ];
        expect(fillGrid([
            [1, 1]
        ])).to.deep.equal(grid)
    })

    it('should work for 1 dimensional input of odd length', function() {

        var grid = [
            [0, 0, 1, 1, 1, 0, 0],
        ];
        expect(fillGrid([
            [1, 1, 1]
        ])).to.deep.equal(grid)
    })

    it('should work for 2 dimensional input', function() {

        var grid = [
            [0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 2, 1, 1, 2, 0, 0],
        ];
        expect(fillGrid([
            [0, 0, 2, 0],
            [0, 1, 1, 0],
            [2, 1, 1, 2]
        ])).to.deep.equal(grid)
    })

})
