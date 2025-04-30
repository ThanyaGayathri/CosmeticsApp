import React from 'react';
import ProductCard from '../components/ProductCard';

function Garnier() {
  const products = [
    {
      id:18,
      name: 'Garnier Micellar Rose cream',
      price: 225,
      description: 'Removes makeup and cleanses skin gently.',
      image: '/images/garnier/rose.jpg'
    },
    {
      id:19,
      name: 'Garnier Light Vit-C Cream',
      price: 135,
      description: 'Brightens skin and reduces dark spots.',
      image: '/images/garnier/face.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Garnier</h2>
        <p style={{ color: '#4a148c' }}>
          Advanced skincare and haircare solutions with active ingredients.
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

export default Garnier;
