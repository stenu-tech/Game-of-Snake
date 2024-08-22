// src/GameCanvas.js
import React, { useEffect, useRef } from 'react';
import SnakeSegment from './SnakeSegment';
import TopView from './TopView';
import './styles.css'; // Ensure to import the CSS file

const GameCanvas = ({ snake, food, canvasSize }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.setTransform(20, 0, 0, 20, 0, 0);
        context.clearRect(0, 0, canvasSize.width / 20, canvasSize.height / 20);
    }, [food, canvasSize]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} style={{ display: 'none' }} />
            {snake.map((segment, index) => (
                <SnakeSegment key={index} x={segment.x} y={segment.y} index={index} />
            ))}
            <div className="bunny-rabbit" style={{
                left: `${food.x * 20}px`,
                top: `${food.y * 20}px`
            }} />
            <TopView snake={snake} food={food} canvasSize={canvasSize} />
        </div>
    );
};

export default GameCanvas;