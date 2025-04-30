import React from 'react';
import ProductCard from '../components/ProductCard';

function DERMDOC() {
  const products = [
    {
      id:7,
      name: 'DERMDOC Kojic Acid Face Wash',
      price: 249,
      description: 'Targets acne and excess oil gently.',
      image: '/images/derm/koli.jpg'
    },
    {
      id:8,
      name: 'DERMDOC Hyaluronic Acid Serum',
      price: 349,
      description: 'Deeply hydrates and plumps skin.',
      image: '/images/derm/serum.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>DERMDOC</h2>
        <p style={{ color: '#4a148c' }}>
          Science-backed skincare for targeted skin concerns.
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

export default DERMDOC;
