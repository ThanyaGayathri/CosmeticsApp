import React from "react";
import brands from "../menudata/brands"; // correct path to import brands.js
import "./BrandList.css"; 

const BrandsList = () => {
  return (
    <div className="brands-container">
      {brands.map((brand, index) => (
        <a key={index} href={brand.path} className="brand-card">
        <img
        src={`/images/brands/${brand.name.replace(/[^a-zA-Z0-9]/g, "")}.jpg`}
        alt={brand.name}
        className="brand-image"
        onError={(e) => { e.target.src = "/images/brands/default.jpg"; }}
      />


          <div className="brand-name">{brand.name}</div>
        </a>
      ))}
    </div>
  );
};

export default BrandsList;
