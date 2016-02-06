var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 41-50', function() {

    it('should find a solution for level 41 in two steps', function() {
        var solution = solver.solve([
            [0, 3, 1],
            [0, 3, 1],
            [0, 2, 3],
            [2, 2, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 2,
            direction: 'right'
        }, {
            x: 4,
            y: 3,
            direction: 'up'
        }])

    })

    it('should find a solution for level 42 in two steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 3],
            [0, 0, 0, 2],
            [0, 3, 3, 2],
            [1, 2, 1, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 3,
            direction: 'right'
        }, {
            x: 4,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 43 in two steps', function() {
        var solution = solver.solve([
            [0, 2, 2, 0],
            [0, 1, 3, 2],
            [1, 1, 3, 3]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 2,
            direction: 'right'
        }, {
            x: 3,
            y: 2,
            direction: 'up'
        }])

    })

    it('should find a solution for level 44 in two steps', function() {
        var solution = solver.solve([
            [0, 0, 3, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 1, 2, 3, 0],
            [1, 2, 4, 3, 2]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 5,
            y: 5,
            direction: 'right'
        }])

    })

    it('should find a solution for level 45 in two steps', function() {
        var solution = solver.solve([
            [0, 0, 1, 0, 0],
            [0, 0, 2, 0, 0],
            [0, 1, 3, 1, 0],
            [0, 3, 2, 3, 0],
            [0, 2, 4, 2, 0],
            [1, 4, 2, 4, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: 'up'
        }, {
            x: 4,
            y: 5,
            direction: 'up'
        }])

    })

    it('should find a solution for level 46 in two steps', function() {
        var solution = solver.solve([
            [2, 0, 0],
            [1, 0, 0],
            [3, 0, 2],
            [2, 0, 3],
            [3, 1, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: 'left'
        }, {
            x: 2,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 47 in two steps', function() {
        var solution = solver.solve([
            [0, 1, 0, 0],
            [0, 2, 0, 0],
            [1, 1, 0, 0],
            [2, 1, 0, 0],
            [1, 2, 0, 0],
            [1, 2, 0, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 3,
            direction: 'right'
        }, {
            x: 2,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 48 in two steps', function() {
        var solution = solver.solve([
            [2, 2, 1],
            [1, 1, 2],
            [2, 2, 1],
            [1, 1, 2],
            [2, 2, 1],
            [1, 1, 2]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'right'
        }, {
            x: 5,
            y: 5,
            direction: 'left'
        }])

    })

    it('should find a solution for level 49 in two steps', function() {
        var solution = solver.solve([
            [0, 1, 0],
            [0, 1, 2],
            [1, 3, 2],
            [2, 1, 3],
            [1, 3, 2],
            [1, 1, 2]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 3,
            direction: 'right'
        }, {
            x: 3,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 50 in two steps', function() {
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





})
