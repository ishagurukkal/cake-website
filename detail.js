// CakeDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CakeDetails.css';

const CakeDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const cake = {
    id: 1,
    name: 'Chocolate Cake',
    description: 'A rich and moist chocolate cake with creamy frosting.',
    price: 20,
    ingredients: ['Flour', 'Sugar', 'Cocoa'],
    image: 'path-to-chocolate-cake.jpg',
  };

  const handleAddToCart = () => {
    // adding the cake to the cart
  };

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: ${cake.price}</p>
      <div>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </div>
      const cake = {
    id: 1,
    name: 'Blueberry Delulu',
    description: 'A rich and moist blueberry cake with cream cheese.',
    price: 520,
    ingredients: ['Flour', 'Sugar', 'blueberry'],
    image: 'img src="https://i.pinimg.com/564x/f7/02/59/f702594704d4ba8d32b3ce8243c2ece2.jpg"',
  };

  const handleAddToCart = () => {
    // adding the cake to the cart
  };

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: ${cake.price}</p>
      <div>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </div>
      const cake = {
    id: 2,
    name: 'Chocolove',
    description: 'A rich and moist chocolate cake with creamy frosting.',
    price: 480,
    ingredients: ['Flour', 'Sugar', 'Cocoa'],
    image: 'img src="https://i.pinimg.com/564x/fe/9e/7a/fe9e7a772002a20b287041a7d03daafd.jpg"',
  };

  const handleAddToCart = () => {
    // adding the cake to the cart
  };

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: ${cake.price}</p>
      <div>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </div>
      const cake = {
    id: 3,
    name: 'Yours',
    description: 'Delicious cake made just for you, you can cuslomise to your liking.',
    price: 320-1500,
    ingredients: ['Flour', 'Sugar', 'based on your choice'],
            
    image:  ' img src="https://i.pinimg.com/564x/c5/d5/60/c5d56025c245277d93a76df48537f867.jpg"'
    image: 
  };

  const handleAddToCart = () => {
    // Logic for adding the cake to the cart
  };

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: ${cake.price}</p>
      <div>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
