import React from 'react';
import ProductCard from '../components/ProductCard';

function SugarPOP() {
  const products = [
    {
      id:63,
      name: 'Sugar POP Lip Balm',
      price: 249,
      description: 'Tinted lip balm with moisturizing formula.',
      image: '/images/sugar/lip.jpg'
    },
    {
      id:62,
      name: 'Sugar POP Compact Powder',
      price: 299,
      description: 'Mattifies and evens out the skin tone.',
      image: '/images/sugar/pow.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Sugar POP</h2>
        <p style={{ color: '#4a148c' }}>
          Colorful, playful, and affordable makeup for everyday glam.
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

export default SugarPOP;
