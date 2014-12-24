jest.dontMock('../model/item');

describe('Item', function() {

  describe('.all', function(){

    var Item = require('../model/item');
    it('should return correct array', function() {
      var result = Item.all();
      var expectArray = {barcode: 'ITEM000000',name: '可口可乐', unit: '瓶', price: 3.00};
      expect(result[0]).toEqual(expectArray);
    });

  });
});
