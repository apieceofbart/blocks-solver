var expect = require('chai').expect;
var solver = require('../solver');
var transpose = require('../utils/transpose');
var collapse = require('../utils/collapse');
var vanish = require('../utils/vanish');


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

describe('fill grid function', function() {

    it('should return the empty grid if input is empty', function() {
        var grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        expect(solver.fillGrid()).to.deep.equal(grid);
    })

    it('should work for 1 dimensional input of even length', function() {

        var grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        ];
        expect(solver.fillGrid([
            [1, 1]
        ])).to.deep.equal(grid)
    })

    it('should work for 1 dimensional input of odd length', function() {

        var grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        ];
        expect(solver.fillGrid([
            [1, 1, 1]
        ])).to.deep.equal(grid)
    })

    it('should work for 2 dimensional input', function() {

        var grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0],
        ];
        expect(solver.fillGrid([
            [0, 0, 2, 0],
            [0, 1, 1, 0],
            [2, 1, 1, 2]
        ])).to.deep.equal(grid)
    })

})


describe('transpose function', function() {
    it('should return same array for 1 element array', function() {
        expect(transpose([
            [1]
        ])).to.deep.equal([
            [1]
        ]);
    })

    it('should transpose 2x2 array', function() {
        expect(transpose([
            [1, 2],
            [3, 4]
        ])).to.deep.equal([
            [1, 3],
            [2, 4]
        ])
    })

    it('should tranpose row to column', function() {
        expect(transpose([
            [1, 2, 3, 4, 5]
        ])).to.deep.equal([
            [1],
            [2],
            [3],
            [4],
            [5]
        ])
    })

    it('should transpose column to row', function() {
        expect(transpose([
            [1],
            [2],
            [3],
            [4],
            [5]
        ])).to.deep.equal([
            [1, 2, 3, 4, 5]
        ])
    })

    it('should transpose 3x2 array', function() {
        expect(transpose([
            [1, 2, 3],
            [4, 5, 6]
        ])).to.deep.equal([
            [1, 4],
            [2, 5],
            [3, 6]
        ])
    })
})


describe('collapse row function', function() {
    it('should return same array when array has no zeros', function() {
        expect(collapse.row([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
    })

    it('should return same array when zeros are on the front', function() {
        expect(collapse.row([0, 0, 0, 1, 2, 3, 4])).to.deep.equal([0, 0, 0, 1, 2, 3, 4]);
    })

    it('should work with zeros inside', function() {
        expect(collapse.row([0, 0, 1, 0, 2, 0, 0, 0, 3, 4, 0, 0, 0])).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4])
    })
})

describe('collapse grid function', function() {
    it('should return same grid when all the blocks are stacked', function() {
        var grid = [
            [0, 1, 0],
            [1, 1, 1]
        ]
        expect(collapse.grid(grid)).to.deep.equal(grid);
    })

    it('should collapse some saple grids', function() {
        expect(collapse.grid([
            [1, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 1, 1]
        ]);

        expect(collapse.grid([
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ])).to.deep.equal([
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1]
        ])
    })
})


describe('vanish row function', function() {
    it('should return the same row of only zeros', function() {
        expect(vanish.row([0, 0, 0, 0])).to.deep.equal([0, 0, 0, 0])
    })

    it('should return the same row when no blocks of numbers', function() {
        expect(vanish.row([1, 2, 3, 3, 4])).to.deep.equal([1, 2, 3, 3, 4]);
    })

    it('should vanish one block of numbers', function() {
        expect(vanish.row([0, 0, 0, 1, 1, 1, 0])).to.deep.equal([0, 0, 0, 0, 0, 0, 0])
    })

    it('should vanish two block of same numbers', function() {
        expect(vanish.row([0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1])).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    })

    it('should vanish two blocks of different numbers', function() {
        expect(vanish.row([0, 0, 1, 1, 1, 0, 2, 2, 2])).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0])
    })
})

describe('vanish grid function', function() {
    it('should return the same grid when nothing to vanish', function() {
        expect(vanish.grid([
            [0, 0, 0],
            [0, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0],
            [0, 1, 1]
        ]);
    });

    it('should vanish bottom row', function() {
        expect(vanish.grid([
            [0, 0, 0],
            [1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0],
            [0, 0, 0]
        ])
    })

    it('should vanish first column', function() {
        expect(vanish.grid([
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0]
        ])).to.deep.equal([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ])
    })
    it('should vanish rows first', function() {
        expect(vanish.grid([
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 1]
        ])).to.deep.equal([
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ])
    })
})

describe('clear grid function', function() {
    it('should do nothing if there is nothing to do', function() {
        expect(solver.clearGrid([
            [0, 1, 0],
            [0, 1, 1]
        ])).to.deep.equal([
            [0, 1, 0],
            [0, 1, 1]
        ])
    })

    it('should work for some complex cases', function() {
        expect(solver.clearGrid([
            [1, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0]
        ]);

        expect(solver.clearGrid([
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ])).to.deep.equal([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);

        expect(solver.clearGrid([
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [1, 0, 0, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    })
})

describe('is empty funciton', function() {
    it('should work for simple examples', function() {
        expect(solver.isEmpty([
            [0, 0, 0],
            [0, 0, 0]
        ])).to.equal(true);

        expect(solver.isEmpty([
            [0, 0, 0],
            [1, 1, 0]
        ])).to.equal(false)

    })


})


describe('find solution function', function() {
    it('should work for level 1', function() {
        expect(solver.findSolution([
            [0, 0, 1, 0, 1, 1, 0, 0]
        ])).to.equal(1);
    })
})
