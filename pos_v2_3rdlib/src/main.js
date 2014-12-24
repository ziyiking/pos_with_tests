function printInventory(tags) {

  var scanner = new Scanner(Item.all());

  var cart = new Cart();

  _.forEach(tags, function(tag) {

    var cartItem = scanner.scan(tag);

    cart.addCartItem(cartItem);
  });

  var promotions = Promotion.all();
  PromotionCalculator.calculateCartItems(cart.cartItems, promotions);

  console.log(cart.toString());
}
