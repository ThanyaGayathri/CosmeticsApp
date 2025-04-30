// src/pages/PersonalCare.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function PersonalCare() {
  const products = [
    { 
      id:49,
      name: 'Toothpaste', 
      price: 150, 
      description: 'Protects and brightens your teeth.', 
      image: '/images/personalcare/paste.jpg' 
    },
    { 
      id:50,
      name: 'Deodorant', 
      price: 250, 
      description: 'Long-lasting freshness all day.', 
      image: '/images/personalcare/deo.jpg' 
    },
    { 
      id:51,
      name: 'Hand Cream', 
      price: 350, 
      description: 'Softens and nourishes your hands.', 
      image: '/images/personalcare/handcream.jpg' 
    },
    { 
      id:52,
      name: 'Shampoo', 
      price:  400, 
      description: 'Cleanses and strengthens your hair.', 
      image: '/images/personalcare/shampoo.JPEG' 
    },
    { 
      id:53,
      name: 'Conditioner', 
      price: 350, 
      description: 'Smoothens and nourishes your hair.', 
      image: '/images/personalcare/conditioner.jpg' 
    }
  ];

  return (
    <div>
      <center><h2 style={{ color: '#880e4f' }}>Personal Care</h2></center>
      <center><p style={{ color: '#4a148c' }}>Browse our personal care range for products that help you stay fresh and clean throughout the day.</p></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PersonalCare;
