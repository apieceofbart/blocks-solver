var expect = require('chai').expect;
var vanish = require('../utils/vanish');

describe('vanish row function', function() {
    it('should return the same row of only zeros', function() {
        expect(vanish.row([0, 0, 0, 0])).to.deep.equal([0, 0, 0, 0])
    })

    it('should return the same row when no blocks of numbers', function() {
        expect(vanish.row([1, 2, 3, 3, 4])).to.deep.equal([1, 2, 3, 3, 4]);
    })

    it('should vanish one block of numbers', function() {
        expect(vanish.row([0, 0, 0, 1, 1, 1, 0])).to.deep.equal([0, 0, 0, 0, 0, 0, 0])
    })

    it('should vanish two block of same numbers', function() {
        expect(vanish.row([0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1])).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    })

    it('should vanish two blocks of different numbers', function() {
        expect(vanish.row([0, 0, 1, 1, 1, 0, 2, 2, 2])).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0])
    })
})

describe('vanish grid function', function() {
    it('should return the same grid when nothing to vanish', function() {
        expect(vanish.grid([
            [0, 0, 0],
            [0, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0],
            [0, 1, 1]
        ]);
    });

    it('should vanish bottom row', function() {
        expect(vanish.grid([
            [0, 0, 0],
            [1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0],
            [0, 0, 0]
        ])
    })

    it('should vanish first column', function() {
        expect(vanish.grid([
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0]
        ])).to.deep.equal([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ])
    })
    it('should vanish rows first', function() {
        expect(vanish.grid([
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 1]
        ])).to.deep.equal([
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ])
    })

    it('should vanish two rows at the same time', function() {
        expect(vanish.grid([
            [0, 1, 1, 1],
            [1, 2, 2, 2]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [1, 0, 0, 0]
        ])
    })
})
