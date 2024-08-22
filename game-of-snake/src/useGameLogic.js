// src/useGameLogic.js
import { useState, useEffect } from 'react';

const useGameLogic = (canvasSize, saveHighScore) => {
    const initialSnake = [{ x: 10, y: 10 }];
    const initialFood = { x: 15, y: 15 };
    const initialDirection = { x: 1, y: 0 };

    const [snake, setSnake] = useState(initialSnake);
    const [food, setFood] = useState(initialFood);
    const [direction, setDirection] = useState(initialDirection);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(200); // Initial speed in milliseconds

    useEffect(() => {
        if (gameOver) return;
        const interval = setInterval(() => {
            setSnake((prevSnake) => {
                const newSnake = [...prevSnake];
                const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

                if (newSnake.some(segment => segment.x === head.x && segment.y === head.y) || head.x < 0 || head.x >= canvasSize.width / 20 || head.y < 0 || head.y >= canvasSize.height / 20) {
                    setGameOver(true);
                    saveHighScore(score);
                    return prevSnake;
                }

                if (head.x === food.x && head.y === food.y) {
                    setFood({ x: Math.floor(Math.random() * (canvasSize.width / 20)), y: Math.floor(Math.random() * (canvasSize.height / 20)) });
                    setScore(score + 1);
                    setSpeed((prevSpeed) => Math.max(prevSpeed - 10, 50)); // Increase speed, minimum 50ms
                } else {
                    newSnake.pop();
                }

                newSnake.unshift(head);
                return newSnake;
            });
        }, speed);
        return () => clearInterval(interval);
    }, [direction, food, gameOver, canvasSize, score, speed]);

    const handleRestart = () => {
        setSnake(initialSnake);
        setFood(initialFood);
        setDirection(initialDirection);
        setGameOver(false);
        setScore(0);
        setSpeed(200); // Reset speed
    };

    return { snake, food, direction, setDirection, gameOver, score, handleRestart };
};

export default useGameLogic;