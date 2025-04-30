import React from 'react';
import ProductCard from '../components/ProductCard';

function Tresemme() {
  const products = [
    {
      id:64,
      name: 'TRESemmé Keratin Smooth Shampoo',
      price:  375,
      description: 'Controls frizz and adds shine.',
      image: '/images/tres/shamp.jpg'
    },
    {
      id:65,
      name: 'TRESemmé Conditioner',
      price: 340,
      description: 'Nourishes and strengthens hair strands.',
      image: '/images/tres/con.jpg'
    }
  ];

  return (
    <div>
      <center>
        <h2 style={{ color: '#880e4f' }}>TRESemmé</h2>
        <p style={{ color: '#4a148c' }}>
          Salon-quality hair care products for smooth and stylish hair.
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

export default Tresemme;
