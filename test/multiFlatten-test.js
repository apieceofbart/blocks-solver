var expect = require('chai').expect;
var multiFlatten = require('../utils/multiFlatten');

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

    it('should work for part of level 22 solution', function() {
        var input = [{
                x: 3,
                y: 4,
                direction: 'right'
            },
            [{
                x: 4,
                y: 5,
                direction: 'left'
            }],
            [{
                    x: 4,
                    y: 5,
                    direction: 'up'
                },
                [{
                        x: 4,
                        y: 5,
                        direction: 'right'
                    },
                    [{
                        direction: 'FINISHED'
                    }]
                ]
            ]
        ];
        var output = [
            [{
                x: 3,
                y: 4,
                direction: 'right'
            }, {
                x: 4,
                y: 5,
                direction: 'left'
            }],
            [{
                x: 3,
                y: 4,
                direction: 'right'
            }, {
                x: 4,
                y: 5,
                direction: 'up'
            }, {
                x: 4,
                y: 5,
                direction: 'right'
            }, {
                direction: 'FINISHED'
            }]
        ];
    })
});
