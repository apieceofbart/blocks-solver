var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 81-90', function() {

    it('should find a solution for level 82 in three steps', function() {
        var solution = solver.solve([
            [0, 4, 0, 4, 0],
            [0, 1, 0, 1, 0],
            [1, 2, 0, 2, 1],
            [2, 3, 4, 3, 2],
            [2, 1, 3, 1, 2]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 2,
            direction: 'right'
        }, {
            x: 5,
            y: 2,
            direction: 'right'
        }, {
            x: 4,
            y: 4,
            direction: 'up'
        }])

    })


})
