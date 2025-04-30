import React from 'react';
import ProductCard from '../components/ProductCard';

function Biotique() {
  const products = [
    {
      id:5,
      name: 'Biotique Fruit Brightening Cream',
      price: 175,
      description: 'Tightens pores and refreshes skin.',
      image: '/images/biotique/fruit.jpg'
    },
    {
      id:6,
      name: 'Biotique Bio-C Orange Cream ',
      price: 199,
      description: 'Softens and nourishes dry skin.',
      image: '/images/biotique/face.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Biotique</h2>
        <p style={{ color: '#4a148c' }}>
          Ayurveda-inspired beauty products for natural care.
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

export default Biotique;
