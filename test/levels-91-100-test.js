var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 91-100', function() {

    it('should find a solution for level 91 in two steps', function() {
        var solution = solver.solve([
            [4, 0, 4, 0, 0],
            [1, 0, 2, 0, 0],
            [5, 4, 3, 0, 0],
            [5, 3, 2, 0, 0],
            [1, 5, 1, 3, 2]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: 'right'
        }, {
            x: 2,
            y: 4,
            direction: 'right'
        }])

    })
    it('should find a solution for level 92 in two steps', function() {
        var solution = solver.solve([
            [0, 0, 4, 0, 0],
            [0, 0, 5, 0, 0],
            [0, 4, 1, 0, 1],
            [4, 5, 2, 5, 3],
            [2, 2, 3, 3, 1]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 2,
            direction: 'right'
        }, {
            x: 6,
            y: 4,
            direction: 'right'
        }])

    })

    it('should find a solution for level 93 in two steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 1, 0],
            [0, 0, 2, 4, 0],
            [0, 2, 3, 2, 0],
            [2, 1, 1, 2, 0],
            [3, 2, 3, 4, 4]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 4,
            direction: 'right'
        }, {
            x: 4,
            y: 4,
            direction: 'right'
        }])

    })

    it('should find a solution for level 94 in two steps', function() {
        var solution = solver.solve([
            [0, 4, 0, 0, 0],
            [0, 1, 5, 0, 0],
            [0, 4, 2, 0, 0],
            [4, 3, 3, 5, 5],
            [1, 3, 1, 2, 2]
        ], 2);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 3,
            direction: 'up'
        }, {
            x: 3,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 95 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 2, 2, 0],
            [0, 0, 2, 1, 1, 0],
            [0, 1, 1, 2, 1, 0],
            [3, 1, 3, 3, 2, 2]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 4,
            direction: 'right'
        }, {
            x: 4,
            y: 4,
            direction: 'right'
        }, {
            x: 6,
            y: 2,
            direction: 'left'
        }])

    })

    it('should find a solution for level 96 in three steps', function() {
        var solution = solver.solve([
            [0, 1, 2, 1, 0, 0],
            [0, 2, 2, 4, 0, 0],
            [0, 2, 4, 1, 0, 0],
            [1, 4, 2, 3, 0, 0],
            [2, 3, 3, 1, 0, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 3,
            direction: 'up'
        }, {
            x: 4,
            y: 0,
            direction: 'right'
        }, {
            x: 5,
            y: 4,
            direction: 'right'
        }])

    })

    it('should find a solution for level 97 in three steps', function() {
        var solution = solver.solve([
            [0, 5, 0, 0],
            [0, 4, 4, 0],
            [3, 2, 5, 0],
            [5, 2, 3, 3],
            [1, 1, 2, 4],
            [2, 2, 1, 2]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 2,
            direction: 'right'
        }, {
            x: 2,
            y: 2,
            direction: 'left'
        }, {
            x: 3,
            y: 5,
            direction: 'up'
        }])

    })

    it('should find a solution for level 98 in four steps', function() {
        var solution = solver.solve([
            [0, 0, 4, 0],
            [0, 1, 1, 0],
            [4, 3, 4, 0],
            [3, 2, 2, 1],
            [2, 1, 1, 2],
            [3, 2, 1, 2]
        ], 4);

        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: 'right'
        }, {
            x: 2,
            y: 4,
            direction: 'right'
        }, {
            x: 2,
            y: 5,
            direction: 'left'
        }, {
            x: 4,
            y: 5,
            direction: 'left'
        }])

    })

    it('should find a solution for level 99 in four steps', function() {
        var solution = solver.solve([
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 2, 0, 2, 0],
            [1, 1, 0, 1, 0],
            [2, 1, 2, 1, 2]
        ], 4);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 4,
            direction: 'up'
        }, {
            x: 3,
            y: 3,
            direction: 'up'
        }, {
            x: 4,
            y: 4,
            direction: 'right'
        }, {
            x: 5,
            y: 2,
            direction: 'left'
        }])

    })

    it.only('should find a solution for level 100 in four steps', function() {
        var solution = solver.solve([
            [0, 0, 1, 0, 0, 0],
            [0, 0, 4, 2, 0, 0],
            [0, 0, 1, 1, 2, 0],
            [0, 0, 4, 1, 2, 0],
            [0, 0, 3, 4, 1, 0],
            [1, 1, 3, 1, 3, 1]
        ], 4);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 4,
            direction: 'up'
        }, {
            x: 3,
            y: 3,
            direction: 'up'
        }, {
            x: 4,
            y: 4,
            direction: 'right'
        }, {
            x: 5,
            y: 2,
            direction: 'left'
        }])

    })


})
