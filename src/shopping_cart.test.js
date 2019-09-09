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

test('can retrieve added articles from the shopping cart', () => {
  let shoppingCart = new ShoppingCart();
  let article1 = {name:'socket', price: 1234};
  let article2 = {name:'skirt', price: 4561};
  shoppingCart.add(article1);
  shoppingCart.add(article2);
  expect(shoppingCart.articles).toContain(article1);
  expect(shoppingCart.articles).toContain(article2);
});