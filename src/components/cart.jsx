import React from 'react';

function Cart({ cartItems, total, onRemove, onShowCheckout }) {

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} (x{item.qty})</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}
          <hr />
          <div className="cart-total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
        </>
      )}
      <button 
        className="checkout-btn"
        onClick={onShowCheckout} 
        disabled={cartItems.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;