var expect = require('chai').expect;
var isEmpty = require('../utils/isEmpty');

describe('is empty function', function() {
    it('should work for simple examples', function() {
        expect(isEmpty([
            [0, 0, 0],
            [0, 0, 0]
        ])).to.equal(true);

        expect(isEmpty([
            [0, 0, 0],
            [1, 1, 0]
        ])).to.equal(false)

    })


})
