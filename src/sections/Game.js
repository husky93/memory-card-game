import React from 'react';
import Card from '../components/Card';
import '../assets/styles/Game.css';

const Game = (props) => {
  const { data, handleCardClick } = props;

  return (
    <div className="game">
      {data.map((item, index) => (
        <Card
          data={item}
          handleCardClick={handleCardClick}
          key={`card-${index}`}
        />
      ))}
    </div>
  );
};

export default Game;
