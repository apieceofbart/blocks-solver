var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 61-70', function() {

    it('should find a solution for level 61 in one step', function() {
        var solution = solver.solve([
            [0, 2, 0],
            [0, 1, 0],
            [0, 3, 0],
            [2, 3, 2],
            [1, 1, 3]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 4,
            direction: 'right'
        }])

    })

    it('should find a solution for level 62 in one step', function() {
        var solution = solver.solve([

            [0, 0, 2, 0, 0, 0, 0],
            [0, 0, 1, 0, 3, 0, 0],
            [2, 2, 1, 0, 1, 3, 3]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 2,
            direction: 'right'
        }])

    })

    it('should find a solution for level 63 in one step', function() {
        var solution = solver.solve([
            [3, 0, 0, 0],
            [2, 0, 0, 0],
            [1, 4, 4, 0],
            [3, 1, 3, 0],
            [1, 2, 2, 4]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 64 in one step', function() {
        var solution = solver.solve([
            [0, 0, 1, 3, 0, 0],
            [0, 1, 3, 2, 1, 0],
            [1, 3, 1, 1, 2, 2]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 2,
            direction: 'up'
        }])

    })

    it('should find a solution for level 65 in one step', function() {
        var solution = solver.solve([
            [0, 1, 1, 0],
            [3, 5, 2, 0],
            [3, 4, 3, 0],
            [4, 5, 4, 0],
            [3, 5, 3, 0],
            [2, 2, 3, 1]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 3,
            direction: 'up'
        }])

    })

    it('should find a solution for level 66 in one step', function() {
        var solution = solver.solve([
            [0, 0, 0, 0, 0, 4],
            [0, 0, 4, 0, 1, 1],
            [0, 0, 1, 1, 2, 2],
            [0, 0, 2, 2, 3, 3],
            [4, 4, 3, 3, 4, 4]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 7,
            y: 0,
            direction: 'right'
        }])

    })

    it('should find a solution for level 67 in one step', function() {
        var solution = solver.solve([
            [0, 0, 4, 0, 4, 0, 0],
            [0, 0, 1, 4, 3, 0, 0],
            [0, 1, 2, 1, 5, 3, 0],
            [1, 2, 1, 4, 3, 5, 3],
            [2, 1, 3, 3, 4, 4, 5]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 4,
            direction: 'up'
        }])

    })

    it('should find a solution for level 68 in one step', function() {
        var solution = solver.solve([
            [0, 0, 2, 0, 0],
            [4, 3, 3, 0, 0],
            [4, 3, 1, 0, 0],
            [1, 1, 3, 0, 0],
            [4, 3, 3, 0, 0],
            [2, 1, 2, 1, 1]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 5,
            direction: 'right'
        }])

    })

    it('should find a solution for level 69 in one step', function() {
        var solution = solver.solve([
            [0, 0, 4, 2, 0, 0],
            [0, 0, 1, 4, 2, 0],
            [0, 1, 3, 3, 4, 0],
            [2, 1, 2, 2, 3, 2]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 70 in one step', function() {
        var solution = solver.solve([
            [0, 0, 0, 2, 0, 0],
            [0, 4, 0, 1, 0, 0],
            [2, 5, 0, 4, 0, 0],
            [2, 5, 0, 3, 4, 4],
            [1, 1, 0, 1, 3, 3],
            [2, 5, 4, 4, 2, 2]
        ], 1);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 1,
            direction: 'left'
        }])

    })



})
