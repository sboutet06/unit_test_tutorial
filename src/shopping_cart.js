class ShoppingCart{

  constructor(){
    this._articles = [];
  }

  add(article){        	
    this._articles.push(article);
  }

  get articles(){
    return this._articles;
  }

}

module.exports = ShoppingCart;