// src/pages/Wellness.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function Wellness() {
  const products = [
    { 
      id:66,
      name: 'Yoga Mat', 
      price: 799, 
      description: 'Non-slip mat for your yoga sessions.',
      image: '/images/wellness/yoga.jpg' 
    },
    { 
      id:67,
      name: 'Aromatherapy Oil', 
      price: 499, 
      description: 'Relax and unwind with soothing aromas.',
      image: '/images/wellness/oil.jpg' 
    },
    { 
      id:68,
      name: 'Herbal Tea', 
      price: 250, 
      description: 'A calming tea blend to help you relax.',
      image: '/images/wellness/tea.jpg' 
    }
  ];

  return (
    <div>
      <center><h2 style={{ color: '#880e4f'}}>Wellness</h2></center>
      <center><p style={{ color: '#4a148c' }}>Discover wellness products designed to help you lead a healthier and balanced life.</p></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Wellness;
