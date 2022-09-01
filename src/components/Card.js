import React from 'react';
import '../assets/styles/Card.css';

const Card = (props) => {
  const { name, image } = props.data;

  return (
    <div className="card" onClick={props.handleCardClick}>
      <img className="card-image" src={image.src} alt={`${name}`} />
      <strong className="card-title">{name}</strong>
    </div>
  );
};

export default Card;
