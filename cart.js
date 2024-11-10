// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Assume a context is created for cart management
import './Cart.css';

const Cart = () => {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                min="1"
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalCost}</h3>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
