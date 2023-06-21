export const isProductInCart = (productId, cartItems) => {
    return cartItems.some((item) => item.id === productId);
  };
  export const removeProductFromCart = (cartItems, product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    return updatedCartItems;
  };