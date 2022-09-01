import React from 'react';
import '../assets/styles/Card.css';

const Card = (props) => {
  const { name, image, clicked } = props.data;
  const classes = clicked ? 'card clicked' : 'card';

  return (
    <div className={classes} onClickCapture={props.handleCardClick}>
      <img className="card-image" src={image.src} alt={`${name}`} />
      <strong className="card-title">{name}</strong>
    </div>
  );
};

export default Card;
