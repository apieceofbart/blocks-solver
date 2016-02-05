var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 11-20', function() {

    it('should find a solution for level 11 in two steps', function() {
        var solution = solver.solve([

            [1, 0, 1, 0, 1]
        ], 2);
        expect(solution).to.deep.equal([{
            x: 2,
            y: 5,
            direction: 'right'
        }, {
            x: 6,
            y: 5,
            direction: 'left'
        }])

    })

    it('should find a solution for level 12 in two steps', function() {
        var solution = solver.solve([
            [1],
            [2],
            [1],
            [2],
            [1],
            [2],

        ], 2);
        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 4,
            y: 2,
            direction: 'up'
        }])

    })

    it('should find a solution for level 13 in two steps', function() {
        var solution = solver.solve([
            [1, 1, 2, 2],
            [2, 2, 1, 1]

        ], 2);
        expect(solution).to.deep.equal([{
            x: 3,
            y: 5,
            direction: 'up'
        }, {
            x: 4,
            y: 5,
            direction: 'up'
        }])

    })

    it('should find a solution for level 14 in two steps', function() {
        var solution = solver.solve([
            [3, 1, 2],
            [1, 2, 3],
            [1, 2, 3]

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


    it('should find a solution for level 15 in two steps', function() {
        var solution = solver.solve([
            [1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1]

        ], 2);
        expect(solution).to.deep.equal([{
            x: 2,
            y: 5,
            direction: 'left'
        }, {
            x: 5,
            y: 5,
            direction: 'left'
        }])

    })

    it('should find a solution for level 16 in two steps', function() {
        var solution = solver.solve([
            [0, 0, 3, 1],
            [0, 2, 3, 3],
            [2, 2, 1, 1]
        ], 2);
        expect(solution).to.deep.equal([{
            x: 4,
            y: 4,
            direction: 'right'
        }, {
            x: 6,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 17 in two steps', function() {
        var solution = solver.solve([
            [0, 1],
            [1, 1],
            [2, 2],
            [1, 1],
            [1, 2]
        ], 2);
        expect(solution).to.deep.equal([{
            x: 5,
            y: 4,
            direction: 'up'
        }, {
            x: 4,
            y: 3,
            direction: 'right'
        }])

    })

    it('should find a solution for level 18 in two steps', function() {
        var solution = solver.solve([
            [0, 2, 0, 0, 0],
            [0, 3, 0, 0, 0],
            [0, 2, 3, 0, 0],
            [2, 1, 3, 1, 1]
        ], 2);
        expect(solution).to.deep.equal([{
            x: 3,
            y: 4,
            direction: 'right'
        }, {
            x: 3,
            y: 5,
            direction: 'right'
        }])

    })

    it('should find a solution for level 19 in two steps', function() {
        var solution = solver.solve([
            [3, 3, 0, 0],
            [4, 4, 3, 0],
            [1, 2, 1, 0],
            [4, 2, 2, 1]
        ], 2);
        expect(solution).to.deep.equal([{
            x: 3,
            y: 4,
            direction: 'right'
        }, {
            x: 3,
            y: 5,
            direction: 'left'
        }])

    })

    it('should find a solution for level 20 in two steps', function() {
        var solution = solver.solve([
            [0, 3, 0],
            [0, 1, 0],
            [4, 1, 0],
            [4, 2, 0],
            [3, 1, 4],
            [2, 2, 3]
        ], 2);
        expect(solution).to.deep.equal([{
            x: 3,
            y: 3,
            direction: 'right'
        }, {
            x: 3,
            y: 3,
            direction: 'left'
        }])

    })

})
