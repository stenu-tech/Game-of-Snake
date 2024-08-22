// src/GameControls.js
import { useEffect } from 'react';

const GameControls = ({ setDirection, gameOver, handleRestart, setCanvasSize }) => {
    useEffect(() => {
        const handleResize = () => setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        const handleKeyDown = (e) => {
            const directions = {
                ArrowUp: { x: 0, y: -1 },
                ArrowDown: { x: 0, y: 1 },
                ArrowLeft: { x: -1, y: 0 },
                ArrowRight: { x: 1, y: 0 },
                ' ': () => gameOver && handleRestart()
            };
            if (directions[e.key]) setDirection(directions[e.key]);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [gameOver, setDirection, handleRestart, setCanvasSize]);

    return null;
};

export default GameControls;