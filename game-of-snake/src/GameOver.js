// src/GameOver.js
import React from 'react';
import './styles.css';

const GameOver = ({ score, highScore }) => (
    <div className="game-over">
        <div>Game Over</div>
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
        <div>Press Space to Retry</div>
    </div>
);

export default GameOver;