import React from 'react';
import ProductCard from '../components/ProductCard';

function GoodVibes() {
  const products = [
    { 
      id:21,
      name: 'Rose Glow Day Cream', 
      price: 299, 
      description: 'Brightens and refreshes skin with natural rose extracts.',
      image: '/images/goodvibes/glow.jpg'
    },
    { 
      id:22,
      name: 'Vitamin C Face Serum', 
      price: 199, 
      description: 'Cleanses and revitalizes dull skin.',
      image: '/images/goodvibes/serum.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Good Vibes</h2>
        <p style={{ color: '#4a148c' }}>
          Natural skincare products for glowing and healthy skin.
        </p>
      </center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default GoodVibes;
