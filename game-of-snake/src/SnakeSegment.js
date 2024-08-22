// src/SnakeSegment.js
import React from 'react';

const SnakeSegment = ({ x, y, index }) => {
    const shade = Math.floor((index / 50) * 255); // Calculate shade of gray
    const color = `rgb(${255 - shade}, ${255 - shade}, ${255 - shade})`; // RGB color for white to gray scalele
    return <div style={{
        position: 'absolute',
        left: `${x * 20}px`,
        top: `${y * 20}px`,
        width: '20px',
        height: '20px',
        backgroundColor: color,
        borderRadius: '4px'
    }} />;
};

export default SnakeSegment;