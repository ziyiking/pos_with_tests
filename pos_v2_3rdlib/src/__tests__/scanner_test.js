jest.dontMock('../model/scanner');
jest.dontMock('lodash');
jest.dontMock('../model/cart-item');

describe('Scanner', function() {

  describe('.scan', function(){

    var Scanner = require('../model/scanner');
    var scanner = new Scanner();
    it('should return correct object ', function() {
      var tag ='ITEM000002-2';
      var result =  (scanner.scan(tag));
      var expectObject = 2;
      expect(result.count).toBe(expectObject);
    });

  });
});
