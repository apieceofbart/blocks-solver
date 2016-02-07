var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 51-60', function() {

    it('should find a solution for level 51 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 3],
            [0, 3, 5],
            [5, 4, 4],
            [1, 5, 1],
            [4, 1, 2],
            [3, 2, 2]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 4,
            direction: 'up'
        }, {
            x: 2,
            y: 3,
            direction: 'up'
        }, {
            x: 4,
            y: 5,
            direction: 'right'
        }])

    })

    it('should find a solution for level 52 in three steps', function() {
        var solution = solver.solve([
            [4, 4, 0, 0],
            [3, 5, 0, 0],
            [2, 3, 3, 0],
            [1, 1, 5, 0],
            [1, 2, 1, 4],
            [2, 1, 1, 5]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 5,
            direction: 'left'
        }, {
            x: 2,
            y: 5,
            direction: 'up'
        }, {
            x: 5,
            y: 5,
            direction: 'left'
        }])

    })

    it('should find a solution for level 53 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 1, 0, 0, 0],
            [0, 0, 5, 0, 5, 0],
            [0, 0, 2, 1, 1, 0],
            [0, 0, 1, 3, 2, 0],
            [0, 0, 2, 2, 3, 5],
            [1, 0, 1, 2, 2, 3]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'left'
        }, {
            x: 5,
            y: 5,
            direction: 'up'
        }, {
            x: 4,
            y: 5,
            direction: 'right'
        }])

    })

    it('should find a solution for level 54 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 1, 0, 0, 0],
            [0, 0, 4, 0, 4, 1],
            [2, 1, 3, 0, 1, 4],
            [1, 2, 2, 3, 3, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 3,
            direction: 'up'
        }, {
            x: 4,
            y: 3,
            direction: 'right'
        }, {
            x: 7,
            y: 1,
            direction: 'right'
        }])

    })

    it('should find a solution for level 55 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 3, 0, 0],
            [0, 4, 4, 1, 0, 0],
            [0, 2, 4, 5, 0, 0],
            [0, 3, 3, 1, 1, 0],
            [2, 2, 5, 1, 5, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 3,
            direction: 'right'
        }, {
            x: 3,
            y: 3,
            direction: 'left'
        }, {
            x: 5,
            y: 3,
            direction: 'up'
        }])

    })

    it('should find a solution for level 56 in three steps', function() {
        var solution = solver.solve([
            [0, 1, 0, 1],
            [0, 1, 2, 3],
            [0, 3, 3, 2],
            [0, 2, 4, 2],
            [0, 4, 1, 1],
            [4, 2, 2, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 5,
            y: 5,
            direction: 'right'
        }, {
            x: 3,
            y: 5,
            direction: 'right'
        }])

    })

    it('should find a solution for level 57 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 2, 0, 0],
            [0, 5, 2, 0, 0],
            [2, 2, 5, 0, 0],
            [5, 1, 4, 0, 0],
            [1, 2, 3, 4, 0],
            [2, 3, 1, 3, 4]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 3,
            y: 3,
            direction: 'up'
        }, {
            x: 4,
            y: 5,
            direction: 'up'
        }])

    })

    it('should find a solution for level 58 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 2, 0],
            [0, 2, 1, 4],
            [0, 4, 1, 1],
            [0, 4, 2, 2],
            [2, 3, 3, 1],
            [1, 2, 1, 3]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 5,
            direction: 'up'
        }, {
            x: 3,
            y: 3,
            direction: 'right'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 59 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 4, 0, 2, 0, 0],
            [0, 0, 5, 0, 5, 0, 0],
            [0, 0, 2, 5, 2, 0, 0],
            [0, 0, 4, 3, 2, 0, 0],
            [0, 0, 3, 3, 1, 0, 0],
            [4, 0, 2, 2, 1, 0, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: 'left'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }, {
            x: 6,
            y: 5,
            direction: 'right'
        }])

    })

    it('should find a solution for level 60 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 4, 2],
            [0, 0, 2, 1],
            [0, 4, 1, 1],
            [0, 2, 1, 3],
            [4, 1, 3, 2],
            [2, 1, 2, 3]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }])

    })




})
