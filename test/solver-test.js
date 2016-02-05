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


describe('find solution function for made up examples', function() {
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
            [1, 0, 0, 1, 1]
        ], 2);

        expect(sol).to.deep.equal([{
            x: 2,
            y: 0,
            direction: "right"
        }, {
            x: 3,
            y: 0,
            direction: "right"
        }])
    })

    it('should work for three right moves solution', function() {
        var sol = solver.solve([
            [1, 0, 0, 0, 1, 1]
        ], 3);

        expect(sol).to.deep.equal([{
            x: 2,
            y: 0,
            direction: "right"
        }, {
            x: 3,
            y: 0,
            direction: "right"
        }, {
            x: 4,
            y: 0,
            direction: "right"
        }])
    })
});
