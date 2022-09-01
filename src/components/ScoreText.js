import React from 'react';

const ScoreText = (props) => {
  const { text, score } = props;
  return (
    <div className="score-text">
      <p>
        {text} <span className="score-highlighted">{score}</span>
      </p>
    </div>
  );
};

export default ScoreText;
