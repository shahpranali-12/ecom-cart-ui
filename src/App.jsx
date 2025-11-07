// src/App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutModal from './components/checkoutmodal';
import ReceiptModal from './components/receiptmodal';
import './App.css';

// Set your API's base URL
const API_URL = 'http://localhost:5001/api';

function App() {
  const [products, setProducts] =useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [showCheckout, setShowCheckout] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receipt, setReceipt] = useState(null);

  // 1. Fetch products and cart on initial load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
    fetchCart();
  }, []);

  // 2. Function to fetch cart
  const fetchCart = async () => {
    try {
      const response = await axios.get(`${API_URL}/cart`);
      setCart(response.data.cartItems);
      setCartTotal(response.data.total);
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  // 3. Add to Cart handler
  const handleAddToCart = async (productId, qty) => {
    try {
      const response = await axios.post(`${API_URL}/cart`, { productId, qty });
      setCart(response.data.cartItems);
      setCartTotal(response.data.total);
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  // 4. Remove from Cart handler
  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`${API_URL}/cart/${itemId}`);
      setCart(response.data.cartItems);
      setCartTotal(response.data.total);
    } catch (err) {
      console.error('Error removing from cart:', err);
    }
  };

  // 5. Handle Checkout
  const handleCheckout = async (userDetails) => {
    try {
      const response = await axios.post(`${API_URL}/checkout`, { 
        cartItems: cart, 
        userDetails: userDetails 
      });
      
      setReceipt(response.data); // Save the receipt
      setShowCheckout(false); // Close checkout modal
      setShowReceipt(true); // Open receipt modal
      
      // Clear cart
      setCart([]);
      setCartTotal(0);

    } catch (err) {
      console.error('Error during checkout:', err);
    }
  };

  const closeReceipt = () => {
    setShowReceipt(false);
    setReceipt(null);
  }

  return (
    <div className="app-container">
      <header>
        <h1>Vibe Commerce</h1>
      </header>
      <main>
        <div className="product-list">
          <h2>Products</h2>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
        <Cart 
          cartItems={cart} 
          total={cartTotal} 
          onRemove={handleRemoveFromCart}
          onShowCheckout={() => setShowCheckout(true)}
        />
      </main>

      {showCheckout && (
        <CheckoutModal 
          onClose={() => setShowCheckout(false)} 
          onSubmit={handleCheckout} 
        />
      )}

      {showReceipt && (
        <ReceiptModal 
          receipt={receipt} 
          onClose={closeReceipt} 
        />
      )}
    </div>
  );
}

export default App;