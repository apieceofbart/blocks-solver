var expect = require('chai').expect;
var areSymetrical = require('../utils/areSymetrical');

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
        expect(areSymetrical(left, right)).to.equal(true);
        expect(areSymetrical(right, left)).to.equal(true);
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
        expect(areSymetrical(left, right)).to.equal(false);
        expect(areSymetrical(right, left)).to.equal(false);
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
        expect(areSymetrical(top, bottom)).to.equal(true);
        expect(areSymetrical(bottom, top)).to.equal(true);
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
        expect(areSymetrical(top, bottom)).to.equal(false);
        expect(areSymetrical(bottom, top)).to.equal(false);
    })



})
