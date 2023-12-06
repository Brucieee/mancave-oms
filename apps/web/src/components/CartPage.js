// CartPage.js
import React from 'react';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - ₱{item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
