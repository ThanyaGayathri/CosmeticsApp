import React from 'react';
import ProductCard from '../components/ProductCard';

function Himalaya() {
  const products = [
    {
      id:24,
      name: 'Himalaya Almond Rose Soap',
      price: 180,
      description: 'Cleanses impurities and helps fight acne.',
      image: '/images/himalaya/soap.jpg'
    },
    {
      id:25,
      name: 'Himalaya Peeled off mask',
      price: 85,
      description: 'Nourishes hair and prevents dryness.',
      image: '/images/himalaya/cream.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>Himalaya</h2>
        <p style={{ color: '#4a148c' }}>
          Herbal care for your skin and hair with natural ingredients.
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

export default Himalaya;
