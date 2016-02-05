var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 31-40', function() {

    it('should find a solution for level 31 in one step', function() {
        var solution = solver.solve([
            [2, 0, 0],
            [2, 2, 0],
            [1, 1, 2],
            [2, 2, 1]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 1,
            direction: 'left'
        }])

    })

    it('should find a solution for level 32 in one step', function() {
        var solution = solver.solve([
            [1, 0, 1],
            [1, 2, 1],
            [2, 1, 2],
            [1, 2, 1],
            [1, 2, 1]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 2,
            direction: 'up'
        }])

    })

    it('should find a solution for level 33 in one step', function() {
        var solution = solver.solve([

            [0, 0, 2, 2],
            [0, 2, 1, 1],
            [0, 1, 1, 2],
            [1, 1, 2, 2]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 34 in one step', function() {
        var solution = solver.solve([
            [0, 2, 0, 0],
            [0, 1, 0, 0],
            [0, 2, 0, 0],
            [0, 1, 2, 0],
            [1, 2, 1, 0],
            [1, 2, 1, 2]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 4,
            direction: 'up'
        }])

    })

    it('should find a solution for level 35 in one step', function() {
        var solution = solver.solve([

            [0, 2, 3, 2, 0],
            [3, 1, 2, 1, 3],
            [2, 2, 3, 2, 2],
            [3, 1, 3, 1, 3],
            [3, 1, 2, 1, 3]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 2,
            direction: 'up'
        }])

    })

    it('should find a solution for level 36 in one step', function() {
        var solution = solver.solve([
            [3, 0, 0],
            [1, 0, 0],
            [2, 0, 0],
            [2, 1, 1],
            [1, 3, 3],
            [2, 1, 1]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 4,
            direction: 'up'
        }])

    })

    it('should find a solution for level 37 in one step', function() {
        var solution = solver.solve([
            [0, 0, 2, 0, 0],
            [0, 0, 3, 0, 0],
            [0, 2, 1, 3, 0],
            [0, 1, 3, 1, 0],
            [2, 1, 2, 1, 3],
            [2, 2, 1, 3, 3]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'up'
        }])

    })




})
