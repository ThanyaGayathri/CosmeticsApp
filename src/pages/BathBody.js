// src/pages/BathBody.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function BathBody() {
  const products = [
    { 
      id:1,
      name: 'Bath Bombs', 
      price: 199, 
      description: 'Relaxing bath bombs with essential oils.',
      image: '/images/bathbody/bombs.jpg' 
    },
    { 
      id:2,
      name: 'Body Wash', 
      price: 299, 
      description: 'Cleanses and softens your skin.',
      image: '/images/bathbody/bodywash.jpg' 
    },
    { 
      id:3,
      name: 'Body Butter', 
      price: 499, 
      description: 'Rich and nourishing body butter.',
      image: '/images/bathbody/butter.jpg' 
    },
    { 
      id:4,
      name: 'Shower Gel', 
      price:  350 , 
      description: 'Refreshing shower gel for smooth skin.',
      image: '/images/bathbody/gel.jpg' 
    }
  ];

  return (
    <div>
      <center><h2 style={{ color: '#880e4f' }}>Bath & Body</h2></center>
      <center><p style={{ color: '#4a148c' }}>Indulge in luxurious bath and body products for ultimate relaxation and hydration.</p></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BathBody;
