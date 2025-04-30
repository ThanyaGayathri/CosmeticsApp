import React from 'react';
import ProductCard from '../components/ProductCard';

function Mamaearth() {
  const products = [
    {
      id:38,
      name: 'Mamaearth Onion Hair Oil',
      price:  499,
      description: 'Boosts hair growth and reduces hair fall.',
      image: '/images/mama/oil.jpg'
    },
    {
      id:39,
      name: 'Mamaearth Ubtan Face Wash',
      price: 299,
      description: 'Gently exfoliates and brightens skin.',
      image: '/images/mama/face.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Mamaearth</h2>
        <p style={{ color: '#4a148c' }}>
          Natural and toxin-free products for healthy skin and hair.
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

export default Mamaearth;
