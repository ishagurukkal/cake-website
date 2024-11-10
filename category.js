// CakeCategories.js
import React from 'react';
import './CakeCategories.css';

const CakeCategories = () => {
  const categories = ['Chocolate', 'Fruit', 'Custom', 'Vegan'];
  return (
    <div className="cake-categories">
      <h2>Choose a Cake Category</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={`path-to-category-image-${category}.jpg`} alt={category} />
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeCategories;
