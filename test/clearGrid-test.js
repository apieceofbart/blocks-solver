var expect = require('chai').expect;
var clearGrid = require('../utils/clearGrid');

describe('clear grid function', function() {
    it('should do nothing if there is nothing to do', function() {
        expect(clearGrid([
            [0, 1, 0],
            [0, 1, 1]
        ])).to.deep.equal([
            [0, 1, 0],
            [0, 1, 1]
        ])
    })

    it('should work for some simple cases', function() {
        expect(clearGrid([
            [1, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0]
        ]);

        expect(clearGrid([
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ])).to.deep.equal([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);

        expect(clearGrid([
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [1, 0, 0, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    })
    it('should work for more complex cases', function() {
        expect(clearGrid([
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 2, 3, 1, 3, 0],
            [2, 2, 4, 1, 5, 3, 0],
            [4, 4, 5, 5, 1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 1, 3, 0],
            [0, 0, 0, 1, 1, 3, 0]
        ])
    })
})
