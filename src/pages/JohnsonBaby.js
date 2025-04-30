import React from 'react';
import ProductCard from '../components/ProductCard';

function JohnsonBaby() {
  const products = [
    {
      id:26,
      name: 'Johnson’s Baby Lotion',
      price: 180,
      description: 'Gentle moisturizer for baby’s delicate skin.',
      image: '/images/john/lotion.jpg'
    },
    {
      id:27,
      name: 'Johnson’s Baby Shampoo',
      price: 150,
      description: 'No more tears formula for safe hair cleansing.',
      image: '/images/john/shamp.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Johnson's Baby</h2>
        <p style={{ color: '#4a148c' }}>
          Trusted baby care for generations with mild and safe ingredients.
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

export default JohnsonBaby;
