var expect = require('chai').expect;
var collapse = require('../utils/collapse');

describe('collapse row function', function() {
    it('should return same array when array has no zeros', function() {
        expect(collapse.row([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
    })

    it('should return same array when zeros are on the front', function() {
        expect(collapse.row([0, 0, 0, 1, 2, 3, 4])).to.deep.equal([0, 0, 0, 1, 2, 3, 4]);
    })

    it('should work with zeros inside', function() {
        expect(collapse.row([0, 0, 1, 0, 2, 0, 0, 0, 3, 4, 0, 0, 0])).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4])
    })
})

describe('collapse grid function', function() {
    it('should return same grid when all the blocks are stacked', function() {
        var grid = [
            [0, 1, 0],
            [1, 1, 1]
        ]
        expect(collapse.grid(grid)).to.deep.equal(grid);
    })

    it('should collapse some saple grids', function() {
        expect(collapse.grid([
            [1, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 1, 1]
        ]);

        expect(collapse.grid([
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ])).to.deep.equal([
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1]
        ])
    })
})
