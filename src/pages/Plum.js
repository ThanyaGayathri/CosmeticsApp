import React from 'react';
import ProductCard from '../components/ProductCard';

function Plum() {
  const products = [
    {
      id:54,
      name: 'Plum Green Cream',
      price:390,
      description: 'Alcohol-free toner for acne-prone skin.',
      image: '/images/plum/cream.jpg'
    },
    {
      id:55,
      name: 'Plum E-Luminence Moisturizer',
      price: 550,
      description: 'Deep moisturizing for dry and sensitive skin.',
      image: '/images/plum/moist.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Plum</h2>
        <p style={{ color: '#4a148c' }}>
          100% vegan skincare products made with love and science.
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

export default Plum;
