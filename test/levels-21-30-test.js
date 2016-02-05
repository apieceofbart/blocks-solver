var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 21-30', function() {

    it('should find a solution for level 21 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 3, 0, 0],
            [2, 0, 3, 0, 2],
            [2, 0, 1, 0, 2],
            [1, 2, 3, 2, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 3,
            direction: 'right'
        }, {
            x: 4,
            y: 3,
            direction: 'up'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 22 in three steps', function() {
        var solution = solver.solve([
            [2, 1, 3],
            [3, 2, 3],
            [2, 1, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 2,
            direction: 'up'
        }, {
            x: 2,
            y: 1,
            direction: 'right'
        }, {
            x: 3,
            y: 1,
            direction: 'right'
        }])

    })

    it('should find a solution for level 23 in three steps', function() {
        var solution = solver.solve([
            [4, 0, 1, 3, 0],
            [4, 3, 3, 1, 2],
            [1, 4, 2, 2, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 2,
            direction: 'right'
        }, {
            x: 6,
            y: 2,
            direction: 'up'
        }, {
            x: 4,
            y: 2,
            direction: 'up'
        }])

    })


    it('should find a solution for level 24 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 0, 1, 1],
            [0, 0, 3, 5, 1, 5],
            [3, 3, 2, 1, 4, 5],
            [2, 2, 4, 4, 1, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 3,
            direction: 'up'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }, {
            x: 7,
            y: 3,
            direction: 'right'
        }])

    })


    it('should find a solution for level 25 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 4, 1],
            [0, 0, 1, 4, 1],
            [0, 0, 3, 2, 4],
            [0, 0, 1, 3, 3],
            [2, 0, 2, 1, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 4,
            direction: 'left'
        }, {
            x: 4,
            y: 4,
            direction: 'right'
        }, {
            x: 5,
            y: 4,
            direction: 'right'
        }])

    })


    it('should find a solution for level 26 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0],
            [0, 0, 3, 0, 1, 0, 0],
            [1, 1, 4, 0, 4, 0, 0],
            [2, 1, 1, 0, 3, 0, 0],
            [1, 2, 2, 0, 4, 1, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 5,
            direction: 'up'
        }, {
            x: 6,
            y: 3,
            direction: 'left'
        }, {
            x: 4,
            y: 5,
            direction: 'right'
        }])

    })


    it('should find a solution for level 27 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 4, 4, 0],
            [0, 0, 0, 1, 4, 0],
            [0, 0, 5, 5, 1, 0],
            [0, 5, 3, 2, 1, 1],
            [2, 2, 3, 1, 3, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 4,
            direction: 'up'
        }, {
            x: 4,
            y: 4,
            direction: 'right'
        }, {
            x: 6,
            y: 4,
            direction: 'right'
        }])

    })


    it('should find a solution for level 28 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 1, 0],
            [4, 5, 1, 0],
            [1, 4, 4, 0],
            [1, 3, 5, 0],
            [2, 2, 3, 5],
            [2, 1, 1, 3]
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
            x: 4,
            y: 5,
            direction: 'left'
        }])

    })

    it('should find a solution for level 29 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 2, 0, 0, 0],
            [0, 0, 5, 2, 0, 0],
            [0, 0, 2, 5, 0, 0],
            [0, 5, 1, 4, 0, 0],
            [1, 3, 1, 4, 0, 0],
            [3, 1, 3, 1, 1, 4]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 5,
            y: 4,
            direction: 'right'
        }, {
            x: 4,
            y: 2,
            direction: 'left'
        }, {
            x: 3,
            y: 5,
            direction: 'up'
        }])

    })

    it('should find a solution for level 30 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 2, 0],
            [2, 0, 4, 0],
            [4, 1, 4, 0],
            [1, 1, 2, 3],
            [2, 2, 1, 1],
            [2, 1, 3, 3]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 2,
            direction: 'right'
        }, {
            x: 5,
            y: 3,
            direction: 'right'
        }, {
            x: 2,
            y: 5,
            direction: 'right'
        }])

    })




})
