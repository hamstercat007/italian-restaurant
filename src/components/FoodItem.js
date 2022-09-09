import React from 'react';

export default function FoodItem({ title, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt='food'></img>
    </div>
  );
}
