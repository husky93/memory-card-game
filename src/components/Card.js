import React from 'react';
import '../assets/styles/Card.css';

const Card = (props) => {
  const { name, image, clicked } = props.data;
  const classes = clicked ? 'card clicked' : 'card';

  const handleMouseMove = (event) => {
    const target = event.target.classList.contains('card')
      ? event.target
      : event.target.parentElement;
    const halfWidth = target.clientWidth / 2;
    const halfHeight = target.clientHeight / 2;
    const mouseX = halfWidth - (event.pageX - target.offsetLeft);
    const mouseY = halfHeight - (event.pageY - target.offsetTop);
    const degX = (mouseY / halfHeight) * 3 + 'deg';
    const degY = (mouseX / halfWidth) * -3 + 'deg';
    target.style.transform =
      'perspective(250px) translate3d(-2px, -2px, 0) rotateX(' +
      degX +
      ') rotateY(' +
      degY +
      ')';
  };

  const handleMouseOut = (event) => {
    const target = event.target.classList.contains('card')
      ? event.target
      : event.target.parentElement;
    target.removeAttribute('style');
  };

  return (
    <div
      className={classes}
      onClickCapture={props.handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <img className="card-image" src={image.src} alt={`${name}`} />
      <strong className="card-title">{name}</strong>
    </div>
  );
};

export default Card;
