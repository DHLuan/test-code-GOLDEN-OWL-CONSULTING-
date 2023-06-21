import React from 'react';
import productsData from '../data/products.json';

function ProductList({ addToCart }) {
  return (
    <div>
      <div class="App_card_38zmH">
            <div class="App_cardTop_3hHIG">
            </div>
            <div class="App_cardTitle_29nyq">Our Products</div>
            <div class="App_cardBody_1tfYc">
                <div>
                <div className="App_shopItem_3FgVU">
        {productsData.products.map((product) => (
          <div className="App_shopItem" key={product.id}>
            <div className="App_shopItemImage_341iU" style={{ backgroundColor: 'rgb(225, 231, 237)' }}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="App_shopItemName_1_FJR">{product.name}</div>
            <div className="App_shopItemDescription_1EIVK">{product.description}</div>
            <div className="App_shopItemBottom_3401_">
              <div className="App_shopItemPrice_2SLiG">${product.price}</div>
              <button
                className="App_inactive_19f0W App_shopItemButton_23FO1"
                onClick={() => addToCart(product)}
              >
                  <div className="App_shopItemButtonCover_1bH2R">
                  <div className="App_shopItemButtonCoverCheckIcon_18IzJ"></div>
                </div>
              </button>

              <button onClick={() => addToCart(product)}>Add to Cart</button>
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