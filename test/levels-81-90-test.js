var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 81-90', function() {

    it('should find a solution for level 81 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 3, 0, 0],
            [0, 0, 4, 0, 2],
            [4, 4, 3, 0, 3],
            [1, 1, 2, 1, 2]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: 'right'
        }, {
            x: 4,
            y: 1,
            direction: 'right'
        }, {
            x: 6,
            y: 1,
            direction: 'right'
        }])

    })

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

    it('should find a solution for level 87 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 4, 0],
            [0, 0, 4, 1, 0],
            [0, 0, 2, 2, 0],
            [0, 0, 1, 3, 4],
            [3, 0, 2, 3, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 4,
            direction: 'right'
        }, {
            x: 4,
            y: 4,
            direction: 'left'
        }, {
            x: 4,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 89 in three steps', function() {
        var solution = solver.solve([
            [4, 0, 0],
            [2, 4, 0],
            [1, 1, 4],
            [3, 2, 3],
            [1, 3, 1],
            [2, 1, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 5,
            direction: 'left'
        }, {
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 2,
            y: 5,
            direction: 'up'
        }])

    })

    it('should find a solution for level 90 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 0, 5],
            [0, 0, 4, 0, 5],
            [0, 0, 2, 4, 4],
            [0, 3, 5, 3, 2],
            [1, 1, 3, 1, 2]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: 'right'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }, {
            x: 4,
            y: 4,
            direction: 'right'
        }])

    })




})
