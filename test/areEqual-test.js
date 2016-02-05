var expect = require('chai').expect;
var areEqual = require('../utils/areEqual');

describe('areEqual function', function() {
    it('should work for simple examples', function() {
        expect(areEqual([
            [0, 0, 0],
            [1, 1, 0]
        ], [
            [0, 0, 0],
            [1, 1, 0]
        ])).to.equal(true);

        expect(areEqual([
            [0, 0, 0],
            [1, 1, 0]
        ], [
            [0, 0, 0],
            [1, 0, 0]
        ])).to.equal(false)

    })


})
