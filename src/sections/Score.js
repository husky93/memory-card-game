import React from 'react';
import ScoreText from '../components/ScoreText';

const Score = (props) => {
  const { score, topScore } = props;

  return (
    <div className="score">
      <ScoreText text="Score:" score={score} />
      <ScoreText text="Best Score:" score={topScore} />
    </div>
  );
};

export default Score;
