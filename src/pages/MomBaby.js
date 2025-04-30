// src/pages/MomBaby.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function MomBaby() {
  const products = [
    { 
      id:40,
      name: 'Baby Lotion', 
      price: 299, 
      description: 'Gentle and nourishing lotion for babies.', 
      image: '/images/mombaby/lotion.jpg' 
    },
    { 
      id:41,
      name: 'Diapers', 
      price: 499, 
      description: 'Soft and comfortable diapers for babies.', 
      image: '/images/mombaby/diapers.jpg' 
    },
    { 
      id:42,
      name: 'Baby Oil', 
      price:  350, 
      description: 'Hydrates and softens baby skin.', 
      image: '/images/mombaby/oil.jpg' 
    },
    { 
      id:43,
      name: 'Baby Powder', 
      price:  250, 
      description: 'Keeps your baby’s skin soft and dry.', 
      image: '/images/mombaby/powder.jpg' 
    },
    { 
      id:44,
      name: 'Baby Wipes', 
      price: 199, 
      description: 'Gentle wipes for cleaning your baby’s skin.', 
      image: '/images/mombaby/wipes.jpg' 
    }
  ];

  return (
    <div>
      <center><h2 style={{ color: '#880e4f' }}>Mom & Baby</h2></center>
      <center><p style={{ color: '#4a148c' }}>Explore our range of products designed for both moms and babies.</p></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MomBaby;
