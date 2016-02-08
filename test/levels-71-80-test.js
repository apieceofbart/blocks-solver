var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 71-80', function() {

    it('should find a solution for level 78 in two steps', function() {
        var solution = solver.solve([
            [3, 0, 1, 0, 0],
            [1, 3, 3, 0, 0],
            [2, 1, 4, 0, 0],
            [1, 2, 2, 0, 0],
            [4, 4, 1, 0, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 3,
            direction: 'left'
        }, {
            x: 4,
            y: 2,
            direction: 'right'
        }])

    })

    it('should find a solution for level 80 in two steps', function() {
        var solution = solver.solve([
            [0, 4, 4, 0, 0],
            [4, 3, 1, 0, 0],
            [2, 1, 2, 1, 0],
            [4, 1, 3, 2, 0],
            [1, 4, 4, 3, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 2,
            direction: 'right'
        }, {
            x: 2,
            y: 4,
            direction: 'left'
        }])

    })



})
