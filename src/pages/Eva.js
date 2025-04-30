import React from 'react';
import ProductCard from '../components/ProductCard';

function Eva() {
  const products = [
    {
      id:9,
      name: 'Eva Deodorant Spray',
      price: 110,
      description: 'Long-lasting fragrance and freshness.',
      image: '/images/eva/per.jpg'
    },
    {
      id:10,
      name: 'Eva Shine Roll',
      price: 120,
      description: 'Keeps you cool and sweat-free.',
      image: '/images/eva/deo.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Eva</h2>
        <p style={{ color: '#4a148c' }}>
          Feminine care products that make you feel confident all day.
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

export default Eva;
