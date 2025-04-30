// components/AddCart.js
import React from 'react';
import { useCartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const AddCart = ({ item }) => {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item);
    navigate('/cart');
  };

  return (
    <button onClick={handleAddToCart} style={{ padding: '8px 16px', backgroundColor: '#ff69b4', border: 'none', color: '#fff', borderRadius: '25px' }}>
      Add to Cart
    </button>
  );
};

export default AddCart;
