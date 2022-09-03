import React, { useState } from 'react';
import '../assets/styles/Card.css';

const Card = (props) => {
  const { name, image, clicked } = props.data;
  const [style, setStyle] = useState({});
  const classes = clicked ? 'card clicked' : 'card';

  const handleMouseMove = (event) => {
    const halfWidth = event.target.clientWidth / 2;
    const halfHeight = event.target.clientHeight / 2;
    const mouseX = halfWidth - (event.pageX - event.target.offsetLeft);
    const mouseY = halfHeight - (event.pageY - event.target.offsetTop);
    const degX = (mouseY / halfHeight) * 3 + 'deg';
    const degY = (mouseX / halfWidth) * -3 + 'deg';
    setStyle({
      transform: `perspective(250px) translate3d(-2px, -2px, 0) rotateX(${degX}) rotateY(${degY})`,
    });
  };

  const handleMouseOut = () => {
    setStyle({});
  };

  return (
    <div
      className={classes}
      onClickCapture={props.handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      style={style}
    >
      <img className="card-image" src={image.src} alt={`${name}`} />
      <strong className="card-title">{name}</strong>
    </div>
  );
};

export default Card;
