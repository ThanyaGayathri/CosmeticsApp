// src/pages/Makeup.js
import React from 'react';
import ProductCard from '../components/ProductCard';  // Correct path to ProductCard.js

function Makeup() {
  const products = [
    { 
      id:32,
      name: 'Foundation', 
      price:  799, 
      description: 'Provides full coverage and a smooth finish.', 
      image: '/images/makeup/foundation.jpg'
    },
    { 
      id:33,
      name: 'Lipstick', 
      price:  399, 
      description: 'Long-lasting and vibrant color.', 
      image: '/images/makeup/lipstick.jpg'
    },
    { 
      id:34,
      name: 'Mascara', 
      price:  499, 
      description: 'Defines and adds volume to your lashes.', 
      image: '/images/makeup/masacara.jpg'
    },
    { 
      id:35,
      name: 'Blush', 
      price: 299, 
      description: 'Adds a pop of color to your cheeks.', 
      image: '/images/makeup/blush.jpg'
    },
    { 
      id:36,
      name: 'Eyeliner', 
      price:  249, 
      description: 'Precise and smudge-proof eyeliner.', 
      image: '/images/makeup/eyeliner.jpg'
    },
    { 
      id:37,
      name: 'Eyeshadow Palette', 
      price: 899, 
      description: 'A palette with vibrant and versatile shades.', 
      image: '/images/makeup/eyeshadow.jpg'
    }
  ];

  return (
    <div>
      <center><h2 style={{ color: '#880e4f' }}>Makeup</h2></center>
      <center><p style={{ color: '#4a148c' }}>Explore our makeup collection to enhance your natural beauty with vibrant colors and textures.</p></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Makeup;
