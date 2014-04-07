const should = require('chai').should();
const tableCalc = require('../lib/table_calc');

describe('table calculation', function() {

  describe('left to right calculation', function() {

    it('could merge[[2, 0], [2, 0]] to [[0, 2], [0, 2]]', function() {
      tableCalc.merge([
          [2, 0],
          [2, 0]
        ]).should.eql([
          [0, 2],
          [0, 2]
        ]);
    });

    it('could merge [[2, 2, 2], [2, 0, 2], [0, 0, 2]] to [[0, 2, 4], [0, 0, 4], [0, 0, 2]]', function() {
      tableCalc.merge([
          [2, 2, 2],
          [2, 0, 2],
          [0, 0, 2]
        ], tableCalc.LTR).should.eql([
          [0, 2, 4],
          [0, 0, 4],
          [0, 0, 2]
        ]);
    });

  });

  describe('right to left calculation', function() {

    it('could merge[[0, 2], [0, 2]] to [[2, 0], [2, 0]]', function() {
      tableCalc.merge([
          [0, 2],
          [0, 2]
        ], tableCalc.RTL).should.eql([
          [2, 0],
          [2, 0]
        ]);
    });

    it('could merge [[2, 2, 2], [2, 0, 2], [0, 0, 2]] to [[4, 2, 0], [4, 0, 0], [2, 0, 0]]', function() {
      tableCalc.merge([
          [2, 2, 2],
          [2, 0, 2],
          [0, 0, 2]
        ], tableCalc.RTL).should.eql([
          [4, 2, 0],
          [4, 0, 0],
          [2, 0, 0]
        ]);
    });

  });

  describe('top to bottom calculation', function() {

    it('could merge [[2, 2], [0, 0] to [[0, 0], [2, 2]]', function() {
      tableCalc.merge([
          [2, 2],
          [0, 0]
        ], tableCalc.TTB).should.eql([
          [0, 0],
          [2, 2]
        ]);
    });

    it('could merge [[2, 2, 2], [2, 0, 2], [0, 0, 2]] to [[0, 0, 0], [0, 0, 2], [4, 2, 4]]', function() {
      tableCalc.merge([
          [2, 2, 2],
          [2, 0, 2],
          [0, 0, 2]
        ], tableCalc.TTB).should.eql([
          [0, 0, 0],
          [0, 0, 2],
          [4, 2, 4]
        ]);
    });

  });

  describe('bottom to top calculation', function() {

    it('could merge [[0, 0], [2, 2]] to [[2, 2], [0, 0]]', function() {
      tableCalc.merge([
          [0, 0],
          [2, 2]
        ], tableCalc.BTT).should.eql([
          [2, 2],
          [0, 0]
        ]);
    });

    it('could merge [[2, 2, 2], [2, 0, 2], [0, 0, 2]] to [[4, 2, 4], [0, 0, 2], [0, 0, 0]]', function() {
      tableCalc.merge([
          [2, 2, 2],
          [2, 0, 2],
          [0, 0, 2]
        ], tableCalc.BTT).should.eql([
          [4, 2, 4],
          [0, 0, 2],
          [0, 0, 0]
        ]);
    });

  });

});