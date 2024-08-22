// src/SnakeGame.js
import React, { useState } from 'react';
import GameCanvas from './GameCanvas';
import GameOver from './GameOver';
import ScoreDisplay from './ScoreDisplay';
import useGameLogic from './useGameLogic';
import useHighScore from './useHighScore';
import GameControls from './GameControls';
import GameContainer from './GameContainer';

const SnakeGame = () => {
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const { highScore, saveHighScore } = useHighScore();
    const { snake, food, direction, setDirection, gameOver, score, handleRestart } = useGameLogic(canvasSize, saveHighScore);

    return (
        <GameContainer>
            <GameCanvas snake={snake} food={food} canvasSize={canvasSize} />
            {gameOver && <GameOver score={score} highScore={highScore} />}
            <ScoreDisplay score={score} />
            <GameControls setDirection={setDirection} gameOver={gameOver} handleRestart={handleRestart} setCanvasSize={setCanvasSize} />
        </GameContainer>
    );
};

export default SnakeGame;