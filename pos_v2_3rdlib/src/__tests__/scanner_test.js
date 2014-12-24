jest.dontMock('../model/scanner');

describe('Scanner', function() {

  describe('.scan', function(){
    
    var Scanner = require('../model/scanner');
    var scanner = new Scanner();
    it('should return correct object ', function() {
      var result =  scanner.scan();
      var expectArray = {barcode: 'ITEM000000',name: '可口可乐', unit: '瓶', price: 3.00};
      expect(result[0]).toEqual(expectArray);
    });

  });
});
