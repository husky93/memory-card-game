import React from 'react';
import Score from '../sections/Score';
import '../assets/styles/Header.css';

const Header = (props) => {
  const { score, topScore } = props;
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo" data-text="Game of Thrones">
          Game of Thrones
        </h1>
        <strong className="logo-subtitle">Memory card game</strong>
      </div>
      <Score score={score} topScore={topScore} />
    </header>
  );
};

export default Header;
