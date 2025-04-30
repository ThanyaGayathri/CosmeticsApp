import React from 'react';
import ProductCard from '../components/ProductCard';

function LorealParis() {
  const products = [
    {
      id:30,
      name: 'L’Oréal Paris Total Repair 5 Shampoo',
      price: 349,
      description: 'Repairs damaged hair and adds shine.',
      image: '/images/loreal/shamp.jpg'
    },
    {
      id:31,
      name: 'L’Oréal Paris Revitalift Day Cream',
      price: 699,
      description: 'Reduces wrinkles and firms skin.',
      image: '/images/loreal/cream.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>L’Oréal Paris</h2>
        <p style={{ color: '#4a148c' }}>
          Iconic beauty brand offering luxurious skincare and haircare.
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

export default LorealParis;
