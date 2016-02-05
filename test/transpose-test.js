var expect = require('chai').expect;
var transpose = require('../utils/transpose');

describe('transpose function', function() {
    it('should return same array for 1 element array', function() {
        expect(transpose([
            [1]
        ])).to.deep.equal([
            [1]
        ]);
    })

    it('should transpose 2x2 array', function() {
        expect(transpose([
            [1, 2],
            [3, 4]
        ])).to.deep.equal([
            [1, 3],
            [2, 4]
        ])
    })

    it('should tranpose row to column', function() {
        expect(transpose([
            [1, 2, 3, 4, 5]
        ])).to.deep.equal([
            [1],
            [2],
            [3],
            [4],
            [5]
        ])
    })

    it('should transpose column to row', function() {
        expect(transpose([
            [1],
            [2],
            [3],
            [4],
            [5]
        ])).to.deep.equal([
            [1, 2, 3, 4, 5]
        ])
    })

    it('should transpose 3x2 array', function() {
        expect(transpose([
            [1, 2, 3],
            [4, 5, 6]
        ])).to.deep.equal([
            [1, 4],
            [2, 5],
            [3, 6]
        ])
    })
})
