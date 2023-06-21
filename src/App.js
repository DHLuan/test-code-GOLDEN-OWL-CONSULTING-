import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './assets/test.css';;

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Hàm để thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  // Hàm để xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  };

  // Hàm để tăng số lượng sản phẩm
  const increaseQuantity = (product) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  // Hàm để giảm số lượng sản phẩm
  const decreaseQuantity = (product) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // Lưu giỏ hàng vào localStorage sau mỗi lần thay đổi
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Khôi phục giỏ hàng từ localStorage khi tải lại trang
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div className="App_mainContent_12BYb" style={{ marginRight: '50px' }}>
      <ProductList addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
}

export default App;
