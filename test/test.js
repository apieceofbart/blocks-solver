var expect = require('chai').expect;
var solver = require('../solver');
var transpose = require('../utils/transpose');
var collapse = require('../utils/collapse');
var vanish = require('../utils/vanish');
var emptyGrid = require('../utils/grid');
var multiFlatten = require('../utils/multiFlatten');
var flatten = require('../utils/flatten');

var grid = emptyGrid();

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

        expect(solver.fillGrid()).to.deep.equal(grid);
    })

    it('should work for 1 dimensional input of even length', function() {

        var grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        ];
        expect(solver.fillGrid([
            [1, 1]
        ])).to.deep.equal(grid)
    })

    it('should work for 1 dimensional input of odd length', function() {

        var grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        ];
        expect(solver.fillGrid([
            [1, 1, 1]
        ])).to.deep.equal(grid)
    })

    it('should work for 2 dimensional input', function() {

        var grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 2, 1, 1, 2, 0, 0, 0],
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

    it('should vanish two rows at the same time', function() {
        expect(vanish.grid([
            [0, 1, 1, 1],
            [1, 2, 2, 2]
        ])).to.deep.equal([
            [0, 0, 0, 0],
            [1, 0, 0, 0]
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

    it('should work for some simple cases', function() {
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
    it('should work for more complex cases', function() {
        expect(solver.clearGrid([
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 2, 3, 1, 3, 0],
            [2, 2, 4, 1, 5, 3, 0],
            [4, 4, 5, 5, 1, 1, 1]
        ])).to.deep.equal([
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 1, 3, 0],
            [0, 0, 0, 1, 1, 3, 0]
        ])
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


describe('multiFlatten function', function() {
    it('should return empty array for empty array', function() {
        expect(multiFlatten([])).to.deep.equal([]);
    })

    it('should return same array for array with one element', function() {
        var array = [{
            a: 1
        }]
        expect(multiFlatten(array)).to.deep.equal(array);
    })

    it('should work for one level, one way nesting', function() {
        var input = [{
                a: 1
            },
            [{
                b: 1
            }]
        ];
        var output = [
            [{
                a: 1
            }, {
                b: 1
            }]
        ];
        expect(multiFlatten(input)).to.deep.equal(output);
    });

    it('should work for two level, one way nesting', function() {
        var input = [{
                a: 1
            },
            [{
                    b: 1
                },
                [{
                    c: 1
                }]
            ]
        ];
        var output = [
            [{
                a: 1
            }, {
                b: 1
            }, {
                c: 1
            }]
        ];
        expect(multiFlatten(input)).to.deep.equal(output);
    });


    it('should work for some real use cases', function() {
        var input = [{
                x: 1,
                y: 4,
                direction: 'right'
            },
            [{
                    x: 2,
                    y: 4,
                    direction: 'right'
                },
                [{
                        x: 3,
                        y: 4,
                        direction: 'right'
                    },
                    [{
                        direction: 'FINISHED'
                    }]
                ]
            ],
            [{
                x: 2,
                y: 4,
                direction: 'left'
            }],
            [{
                x: 5,
                y: 4,
                direction: 'left'
            }],
            [{
                x: 6,
                y: 4,
                direction: 'right'
            }]
        ];


        var output = [
            [{
                x: 1,
                y: 4,
                direction: 'right'
            }, {
                x: 2,
                y: 4,
                direction: 'right'
            }, {
                x: 3,
                y: 4,
                direction: 'right'
            }, {
                direction: 'FINISHED'
            }],
            [{
                x: 1,
                y: 4,
                direction: 'right'
            }, {
                x: 2,
                y: 4,
                direction: 'left'
            }],
            [{
                x: 1,
                y: 4,
                direction: 'right'
            }, {
                x: 5,
                y: 4,
                direction: 'left'
            }],
            [{
                x: 1,
                y: 4,
                direction: 'right'
            }, {
                x: 6,
                y: 4,
                direction: 'right'
            }]
        ];

        expect(multiFlatten(input)).to.deep.equal(output);
    })
});

describe('areSymetrical function', function() {
    it('should work for two blocks next to each other on the same x axis', function() {
        var left = {
                x: 3,
                y: 5,
                direction: "right"
            },
            right = {
                x: 4,
                y: 5,
                direction: "left"
            }
        expect(solver.areSymetrical(left, right)).to.equal(true);
        expect(solver.areSymetrical(right, left)).to.equal(true);
    })

    it('should not work for two blocks far away from each other on the same x axis', function() {
        var left = {
                x: 2,
                y: 5,
                direction: "right"
            },
            right = {
                x: 4,
                y: 5,
                direction: "left"
            }
        expect(solver.areSymetrical(left, right)).to.equal(false);
        expect(solver.areSymetrical(right, left)).to.equal(false);
    })

    it('should work for two blocks next to each other on the same y axis', function() {
        var top = {
                x: 3,
                y: 4,
                direction: "down"
            },
            bottom = {
                x: 3,
                y: 5,
                direction: "up"
            }
        expect(solver.areSymetrical(top, bottom)).to.equal(true);
        expect(solver.areSymetrical(bottom, top)).to.equal(true);
    })

    it('should not work for two blocks far away from each other on the same y axis', function() {
        var top = {
                x: 3,
                y: 3,
                direction: "down"
            },
            bottom = {
                x: 3,
                y: 5,
                direction: "up"
            }
        expect(solver.areSymetrical(top, bottom)).to.equal(false);
        expect(solver.areSymetrical(bottom, top)).to.equal(false);
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
            x: 4,
            y: 5,
            direction: 'up'
        }, {
            x: 2,
            y: 5,
            direction: 'right'
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
            x: 3,
            y: 4,
            direction: 'right'
        }, {
            x: 4,
            y: 3,
            direction: 'left'
        }, {
            x: 5,
            y: 4,
            direction: 'right'
        }])

    })


/*    it('should find a solution for level 25 in three steps', function() {
        var solution = solver.solve([
            [0, 0, 0, 4, 1],
            [0, 0, 1, 4, 1],
            [0, 0, 3, 2, 4],
            [0, 0, 1, 3, 3],
            [2, 0, 2, 1, 1]
        ], 3);

        expect(solution).to.deep.equal([{
            x: 3,
            y: 4,
            direction: 'right'
        }, {
            x: 4,
            y: 3,
            direction: 'left'
        }, {
            x: 5,
            y: 4,
            direction: 'right'
        }])

    })
*/



})
