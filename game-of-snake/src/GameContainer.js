// src/GameContainer.js
import React from 'react';

const GameContainer = ({ children }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
    }}>
        <div style={{
            position: 'relative',
            width: '80vw',
            height: '80vh',
            border: '2px solid #61dafb',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#20232a'
        }}>
            {children}
        </div>
    </div>
);

export default GameContainer;