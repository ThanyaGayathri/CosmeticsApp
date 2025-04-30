import React from 'react';
import { useCartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom'; // ✅ Import this

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCartContext();
  const navigate = useNavigate(); // ✅

  const handleBuyNow = () => {
    const total = getTotalPrice();
    sessionStorage.setItem("cart_total", total); // 🔐 Save total to sessionStorage
    clearCart(); // ✅ Empty the cart after purchase
    navigate('/orders');
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', alignItems: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'contain', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={buttonStyle}>-</button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={buttonStyle}>+</button>
                </div>
                <p>Subtotal: ₹{item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} style={{ marginTop: '10px', background: 'red', color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{getTotalPrice()}</h3>
          <button
            onClick={handleBuyNow}
            style={{
              background: '#28a745',
              color: '#fff',
              padding: '10px 20px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              marginTop: '20px',
            }}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

const buttonStyle = {
  background: '#ff69b4',
  border: 'none',
  padding: '5px 10px',
  color: 'white',
  fontSize: '18px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default CartPage;
