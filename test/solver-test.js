var expect = require('chai').expect;
var solver = require('../solver');

describe('basic testing', function() {


    it('1 should equal 1', function() {
        expect(1).to.equal(1);
    })

    it('should compare two 2-dim arrays', function() {
        expect([
            [1, 1, 1],
            [1, 1, 1]
        ]).to.deep.equal([
            [1, 1, 1],
            [1, 1, 1]
        ]);
    })
})


describe('find solution function', function() {
    it('should work for empty grid', function() {
        expect(solver.solve([
            [0, 0, 0, 0]
        ])).to.deep.equal([
            [{
                direction: "FINISHED"
            }]
        ]);
    })



    it('should work for two right moves solution', function() {
        var sol = solver.solve([
            [0, 0, 1, 0, 0, 1, 1, 0, 0]
        ], 2);

        expect(sol).to.deep.equal([{
            x: 2,
            y: 5,
            direction: "right"
        }, {
            x: 3,
            y: 5,
            direction: "right"
        }])
    })

    it('should work for three right moves solution', function() {
        var sol = solver.solve([
            [0, 1, 0, 0, 0, 1, 1, 0, 0]
        ], 3);

        expect(sol).to.deep.equal([{
            x: 1,
            y: 5,
            direction: "right"
        }, {
            x: 2,
            y: 5,
            direction: "right"
        }, {
            x: 3,
            y: 5,
            direction: "right"
        }])
    })

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

    it('should find a solution for level 21 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 3, 0, 0],
            [2, 0, 3, 0, 2],
            [2, 0, 1, 0, 2],
            [1, 2, 3, 2, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 2,
            y: 5,
            direction: 'right'
        }, {
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 5,
            y: 5,
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
            x: 5,
            y: 5,
            direction: 'up'
        }, {
            x: 3,
            y: 4,
            direction: 'right'
        }, {
            x: 4,
            y: 4,
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
            y: 5,
            direction: 'right'
        }, {
            x: 6,
            y: 5,
            direction: 'up'
        }, {
            x: 4,
            y: 5,
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
            y: 5,
            direction: 'up'
        }, {
            x: 5,
            y: 5,
            direction: 'right'
        }, {
            x: 7,
            y: 5,
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
            y: 5,
            direction: 'left'
        }, {
            x: 4,
            y: 5,
            direction: 'right'
        }, {
            x: 5,
            y: 5,
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
            x: 1,
            y: 5,
            direction: 'up'
        }, {
            x: 5,
            y: 3,
            direction: 'left'
        }, {
            x: 3,
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
            y: 5,
            direction: 'up'
        }, {
            x: 4,
            y: 5,
            direction: 'right'
        }, {
            x: 6,
            y: 5,
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
            x: 3,
            y: 5,
            direction: 'left'
        }, {
            x: 3,
            y: 5,
            direction: 'up'
        }, {
            x: 5,
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
            x: 4,
            y: 2,
            direction: 'right'
        }, {
            x: 6,
            y: 3,
            direction: 'right'
        }, {
            x: 3,
            y: 5,
            direction: 'right'
        }])

    })




})
