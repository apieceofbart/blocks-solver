var expect = require('chai').expect;
var solver = require('../solver');

describe('find solution function for levels 1-10', function() {

    it('should work for level 1', function() {
        var sol = solver.solve([
            [0, 0, 0, 1, 0, 1, 1, 0, 0, 0]
        ]);

        expect(sol).to.deep.equal([{
            x: 3,
            y: 5,
            direction: "right"
        }]);
    })


    it('should find a solution for level 2 in one step', function() {
        var solution = solver.solve([
            [0, 1, 0],
            [1, 1, 0]
        ], 2);
        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: "right"
        }])

    })

    it('should find a solution for level 3 in one step', function() {
        var solution = solver.solve([
            [2, 1, 2],
            [1, 2, 1]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 4,
            y: 5,
            direction: "up"
        }])

    })

    it('should find a solution for level 4 in one step', function() {
        var solution = solver.solve([
            [0, 0, 1],
            [0, 2, 2],
            [2, 1, 1]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 5,
            y: 3,
            direction: "right"
        }])

    })

    it('should find a solution for level 5 in one step', function() {
        var solution = solver.solve([
            [0, 0, 0, 1, 0, 0],
            [2, 2, 0, 2, 1, 1]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 5,
            y: 5,
            direction: "left"
        }])

    })

    it('should find a solution for level 6 in one step', function() {
        var solution = solver.solve([
            [0, 0, 1],
            [0, 0, 2],
            [0, 0, 1],
            [2, 2, 1]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 5,
            y: 3,
            direction: "up"
        }])

    })

    it('should find a solution for level 7 in one step', function() {
        var solution = solver.solve([

            [1, 0, 0],
            [2, 1, 0],
            [2, 2, 1]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 3,
            y: 5,
            direction: "left"
        }])

    })

    it('should find a solution for level 8 in one step', function() {
        var solution = solver.solve([
            [0, 2, 0, 0],
            [0, 1, 0, 0],
            [0, 2, 0, 0],
            [0, 1, 0, 0],
            [2, 1, 0, 2]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 4,
            y: 3,
            direction: "right"
        }])

    })

    it('should find a solution for level 9 in one step', function() {
        var solution = solver.solve([

            [0, 0, 1, 0],
            [0, 0, 2, 1],
            [0, 0, 1, 2],
            [1, 1, 2, 1]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 5,
            y: 4,
            direction: "right"
        }])

    })
    it('should find a solution for level 10 in one step', function() {
        var solution = solver.solve([
            [0, 0, 1],
            [2, 0, 1],
            [1, 2, 2],
            [2, 1, 1],
            [2, 2, 1]
        ], 1);
        expect(solution).to.deep.equal([{
            x: 3,
            y: 5,
            direction: "left"
        }])

    })
});
