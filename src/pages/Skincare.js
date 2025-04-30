// src/pages/Skincare.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function Skincare() {
  const products = [
    { 
      id:61,
      name: 'Aloe Vera Gel', 
      price: 199, 
      description: 'A soothing gel for skin hydration.', 
      image: '/images/skincare/aloeveragel.jpg'
    },
    { 
      id:56,
      name: 'Vitamin C Serum', 
      price: 499, 
      description: 'Brightens and rejuvenates your skin.', 
      image: '/images/skincare/serum.jpg'
    },
    { 
      id:57,
      name: 'Sunscreen Lotion', 
      price: 299, 
      description: 'Protects your skin from harmful UV rays.', 
      image: '/images/skincare/sunscreen.jpg'
    },
    { 
      id:58,
      name: 'Rose Water Mist', 
      price: 150, 
      description: 'Refreshes and hydrates your skin.', 
      image: '/images/skincare/rosewater.jpg'
    },
    { 
      id:59,
      name: 'Anti-Aging Cream', 
      price: 899, 
      description: 'Reduces wrinkles and firms skin.', 
      image: '/images/skincare/antiaging.jpg'
    },
    { 
      id:60,
      name: 'Brightening Face Pack', 
      price: 349, 
      description: 'A face pack that brightens your complexion.', 
      image: '/images/skincare/brightening.jpg'
    }
  ];

  return (
    <div>
      <center><h2 style={{ color: '#880e4f' }}>Skincare</h2></center>
      <center><p style={{ color: '#4a148c' }}>Explore our skincare products designed to hydrate, protect, and rejuvenate your skin.</p></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Skincare;
