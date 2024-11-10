// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>Sweet Delights Bakery has been serving freshly baked cakes for over 20 years...</p>
      <h3>Contact Us</h3>
      <form>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit
