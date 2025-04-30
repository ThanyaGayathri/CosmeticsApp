import React from 'react';
import ProductCard from '../components/ProductCard';

function Lakme() {
  const products = [
    {
      id:28,
      name: 'Lakme Vit-C SuperGlow',
      price: 750,
      description: 'High-coverage foundation for a flawless finish.',
      image: '/images/lakme/glow.jpg'
    },
    {
      id:29,
      name: 'Lakme Naturalle Lipstick',
      price: 250,
      description: 'Smudge-proof and waterproof  for long-lasting wear.',
      image: '/images/lakme/lip.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Lakme</h2>
        <p style={{ color: '#4a148c' }}>
          Explore premium cosmetics trusted by professionals and makeup lovers.
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

export default Lakme;
