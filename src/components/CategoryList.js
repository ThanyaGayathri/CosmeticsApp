import React from "react";
import categories from "../menudata/categories";
import "./CategoryList.css";

const offerImages = [
  "/images/offera.jpg",
  "/images/offer1.jpg",
  "/images/offer2.jpg",
  "/images/offer3.jpg",
  "/images/offer4.jpg", 
  "/images/offer5.jpg",
  "/images/offer6.jpg",
  "/images/offer7.jpg"
];

const CategoryList = () => {
  return (
    <div className="category-page-wrapper">
      <div className="categories-container">
        {categories.map((category, index) => (
          <a key={index} href={category.path} className="category-card">
            <div className="category-name">{category.name}</div>
          </a>
        ))}
      </div>

      {/* Scrolling offers section */}
      <div className="offer-marquee-wrapper">
        <div className="offer-marquee">
          {offerImages.map((src, index) => (
            <img key={index} src={src} alt={`Offer ${index + 1}`} className="offer-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
