import React, { useState } from 'react';
import productsData from '../data/products.json';

function ProductList({ addToCart, totalAmount}) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartItems([...cartItems, product]);
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div>
      <div className="App_card_38zmH">
        <div className="App_cardTop_3hHIG"></div>
        <div className="App_cardTitle_29nyq">Our Products</div>
        <div className="App_cardBody_1tfYc">
          <div>
            <div className="App_shopItem_3FgVU">
              {productsData.products.map((product) => (
                <div className="App_shopItem" key={product.id}>
                  <div
                    className="App_shopItemImage_341iU"
                    style={{ backgroundColor: 'rgb(225, 231, 237)' }}
                  >
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="App_shopItemName_1_FJR">{product.name}</div>
                  <div className="App_shopItemDescription_1EIVK">{product.description}</div>
                  <div className="App_shopItemBottom_3401_">
                    <div className="App_shopItemPrice_2SLiG">${product.price}</div>
                    {isProductInCart(product.id) ? (
                      <div className="App_inactive_19f0W App_shopItemButton_23FO1">
                        <div className="App_shopItemButtonCover_1bH2R">
                          <div className="App_shopItemButtonCoverCheckIcon_18IzJ"></div>
                        </div>
                      </div>
                    ) : (
                      <button className="App_shopItemButton_23FO1" onClick={() => handleAddToCart(product)}>
                        <p>ADD TO CART</p>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
