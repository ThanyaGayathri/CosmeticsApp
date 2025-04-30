// src/pages/Fragrance.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function Fragrance() {
  const products = [
    { 
      id:17,
      name: 'Lavender Perfume', 
      price:  799, 
      description: 'A calming fragrance with lavender notes.',
      image: '/images/fragrance/perfume.jpg' 
    },
    { 
      id:16,
      name: 'Citrus Cologne', 
      price: 599, 
      description: 'Refreshing and zesty citrus scent.',
      image: '/images/fragrance/citrus.jpg' 
    },
    { 
      id:15,
      name: 'Rose Mist', 
      price: 399, 
      description: 'A floral fragrance with a hint of rose.',
      image: '/images/fragrance/rose.jpg' 
    },
    { 
      id:14,
      name: 'Jasmine Perfume', 
      price: 850, 
      description: 'A soothing and elegant jasmine fragrance.',
      image: '/images/fragrance/jasmine.jpg' 
    },
    { 
      id:13,
      name: 'Vanilla Essence', 
      price: 699, 
      description: 'Sweet and warm vanilla scent.',
      image: '/images/fragrance/vanilla.jpg' 
    }
  ];

  return (
    <div>
      <center><h2 style={{ color: '#880e4f' }}>Fragrance</h2></center>
      <center><p style={{ color: '#4a148c' }}>Explore our range of fragrances to add a refreshing scent to your day.</p></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Fragrance;
