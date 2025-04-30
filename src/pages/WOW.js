import React from 'react';
import ProductCard from '../components/ProductCard';

function WOW() {
  const products = [
    {
      id:69,
      name: 'WOW Apple Cider Vinegar Shampoo',
      price: 499,
      description: 'Cleanses and detoxes scalp for healthy hair.',
      image: '/images/wow/shamp.jpg'
    },
    {
      id:70,
      name: 'WOW Vitamin C Face Serum',
      price:  599,
      description: 'Brightens and repairs dull, tired skin.',
      image: '/images/wow/face.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>WOW</h2>
        <p style={{ color: '#4a148c' }}>
          Natural and holistic wellness solutions for skin and hair.
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

export default WOW;
