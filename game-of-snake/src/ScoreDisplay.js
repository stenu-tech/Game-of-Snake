// src/ScoreDisplay.js
import React from 'react';
import './styles.css';

const ScoreDisplay = ({ score }) => (
    <div className="score-display">
        {score}
    </div>
);

export default ScoreDisplay;