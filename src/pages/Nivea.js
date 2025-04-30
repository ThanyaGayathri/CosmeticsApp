import React from 'react';
import ProductCard from '../components/ProductCard';

function Nivea() {
  const products = [
    {
      id:45,
      name: 'Frangipani Shower Gel',
      price: 299,
      description: 'Light, non-greasy formula perfect for daily use.',
      image: '/images/nivea/shower.jpg'
    },
    {
      id:46,
      name: 'Nivea Soft Moisturizer Cream',
      price: 349,
      description: 'Reduces dark spots and gives an even skin tone.',
      image: '/images/nivea/soft.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Nivea</h2>
        <p style={{ color: '#4a148c' }}>
          Trusted skincare for over a century with German quality.
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

export default Nivea;
