import React from 'react';

function Cart({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalAmount }) {

  return (
    <div className="App_card_38zmH" style={{ marginLeft: '50px' }}>
      <div className="App_cardTop_3hHIG">
        <div className="App_cardTitle_29nyq">
          Your cart
          <span className="App_cardTitleAmount_17QFR">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="App_cardBody_1tfYc">
          <div>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div className="App_cartItem_lfA9I">
                    <div className="App_cartItemLeft_1HqDk cartItemLeft">
                      <div className="App_cartItemImage_1rLvq cartItemImage" style={{ backgroundColor: 'rgb(225, 231, 237)' }}>
                        <div className="App_cartItemImageBlock_wRE4E">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                    <div className="App_cartItemRight_2LNcC cartItemRight">
                      <div className="App_cartItemName_3he6M cartItemName">{item.name}</div>
                      <div className="App_cartItemPrice_R0sr2 cartItemPrice">${item.price}</div>
                      <div className="App_cartItemActions_13kia cartItemActions">
                        <div className="App_cartItemCount_1GCCN cartItemCount">
                          <button className="App_cartItemCountButton_Gr8VG" onClick={() => decreaseQuantity(item)}>-</button>
                          <div className="App_cartItemCountNumber_1Evq9">{item.quantity}</div>
                          <button className="App_cartItemCountButton_Gr8VG" onClick={() => increaseQuantity(item)}>+</button>
                        </div>
                        <div className="App_cartItemRemove_1GiLR cartItemRemove">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC" alt="Remove" onClick={() => removeFromCart(item)} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
