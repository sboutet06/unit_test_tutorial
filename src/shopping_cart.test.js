test('can create a shopping cart', () => {
  let shoppingCart = new ShoppingCart();
  expect(shoppingCart).toBeInstanceOf(ShoppingCart);
});
