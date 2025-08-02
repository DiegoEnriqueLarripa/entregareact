import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart">🛒</span>
      <span className="badge bg-danger ms-1">5</span>
    </div>
  );
}

export default CartWidget;