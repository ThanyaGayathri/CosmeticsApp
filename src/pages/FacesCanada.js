import React from 'react';
import ProductCard from '../components/ProductCard';

function FacesCanada() {
  const products = [
    {
      id:11,
      name: 'Faces Canada Ultime Pro Matte Lip Crayon',
      price: 599,
      description: 'Rich pigment, smooth application, and matte finish.',
      image: '/images/faces/lip.jpg'
    },
    {
      id:12,
      name: 'Faces Canada Matte Compact',
      price: 499,
      description: 'Lightweight base makeup with buildable coverage.',
      image: '/images/faces/powder.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Faces Canada</h2>
        <p style={{ color: '#4a148c' }}>
          High-performance, cruelty-free cosmetics with Canadian quality.
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

export default FacesCanada;
