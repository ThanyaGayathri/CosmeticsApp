import React from 'react';
import ProductCard from '../components/ProductCard';

function Nykaa() {
  const products = [
    {
      id:47,
      name: 'Nykaa So Matte Lipstick',
      price: 399,
      description: 'Highly pigmented and long-lasting lipstick.',
      image: '/images/nykaa/lip.jpg'
    },
    {
      id:48,
      name: 'Nykaa Nail Enamel',
      price: 199,
      description: 'Vibrant and chip-resistant nail color.',
      image: '/images/nykaa/nail.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Nykaa</h2>
        <p style={{ color: '#4a148c' }}>
          Trendy and affordable beauty products from India’s favorite brand.
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

export default Nykaa;
