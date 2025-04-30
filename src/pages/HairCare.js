// src/pages/HairCare.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function HairCare() {
  const products = [
    { 
      name: 'Shampoo', 
      price: 'Rs. 350', 
      description: 'Gentle cleansing formula for all hair types.',
      image: '/images/haircare/shampoo.jpg' 
    },
    { 
      name: 'Hair Serum', 
      price: 'Rs. 600', 
      description: 'Adds shine and smoothness to your hair.',
      image: '/images/haircare/serum.jpg' 
    },
    { 
      name: 'Conditioner', 
      price: 'Rs. 450', 
      description: 'Deeply nourishes and softens hair.',
      image: '/images/haircare/conditioner.jpg' 
    },
    { 
      id:23,
      name: 'Hair Mask', 
      price: 700, 
      description: 'Restores and strengthens hair.',
      image: '/images/haircare/hairmask.jpg' 
    },
    { 
      id:24,
      name: 'Hair Oil', 
      price: 500, 
      description: 'Promotes hair growth and strengthens roots.',
      image: '/images/haircare/hairoil.jpg' 
    }
  ];

  return (
    <div>
        <center>
  <h2 style={{ color: '#880e4f' }}>Hair Care</h2>
</center>
<center>
  <p style={{ color: '#4a148c' }}>
    Discover our hair care range designed to cleanse, nourish, and protect your hair.
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

export default HairCare;
