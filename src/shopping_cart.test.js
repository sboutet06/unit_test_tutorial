const ShoppingCart = require('./shopping_cart');

test('can create a shopping cart', () => {
  let shoppingCart = new ShoppingCart();
  expect(shoppingCart).toBeInstanceOf(ShoppingCart);
});

test('can add an article to the shopping cart', () => {
  let shoppingCart = new ShoppingCart();
  let article = {name:'socket', price: 1234};
  shoppingCart.add(article);
});

test('shopping cart must be empty at start', () => {
  let shoppingCart = new ShoppingCart();
  expect(shoppingCart.articles).toHaveLength(0);
});