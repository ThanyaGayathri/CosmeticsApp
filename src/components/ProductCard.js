import React from 'react';
import { useCartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product); // Add product to global cart context
    alert(`${product.name} added to cart!`); // Show confirmation
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f5d0ff, #c2f0ff)',
        borderRadius: '20px',
        padding: '20px',
        width: '250px',
        margin: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '10px',
        marginBottom: '15px',
      }}>
        <img src={product.image} alt={product.name} style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
      </div>

      <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{product.name}</h3>
      <p style={{ fontSize: '16px', color: '#555' }}>₹{product.price}</p>
      <button 
        style={{
          marginTop: '10px',
          background: '#ff69b4',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#ff85c1')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#ff69b4')}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
