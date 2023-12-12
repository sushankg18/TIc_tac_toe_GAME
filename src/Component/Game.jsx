// Game.js
import React from 'react';
import Board from './Board';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* game status/history goes here */}</div>
        <ol>{/* list of moves goes here */}</ol>
      </div>
    </div>
  );
};

export default Game;
