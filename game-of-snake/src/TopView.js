// src/TopView.js
import React from 'react';
import './styles.css'; // Ensure to import the CSS file

const TopView = ({ snake, food, canvasSize }) => {
    return (
        <div className="top-view" style={{ width: canvasSize.width, height: canvasSize.height }}>
            {snake.map((segment, index) => (
                <div key={index} className="snake-segment" style={{
                    left: `${segment.x * 20}px`,
                    top: `${segment.y * 20}px`
                }} />
            ))}
            <div className="bunny-rabbit" style={{
                left: `${food.x * 20}px`,
                top: `${food.y * 20}px`
            }} />
        </div>
    );
};

export default TopView;