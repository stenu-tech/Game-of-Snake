// src/SnakeGame.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SnakeGame from './SnakeGame';

test('renders initial score', () => {
    render(<SnakeGame />);
    const scoreElement = screen.getByText(/Score: 0/i);
    expect(scoreElement).toBeInTheDocument();
});

test('updates score when food is eaten', () => {
    render(<SnakeGame />);
    // Simulate the snake eating food
    // This part will depend on how you can trigger the game loop and food consumption in your tests
    // For example, you might need to mock the game loop or use a library like jest-advance-timers
    // Here, we assume a function `simulateGameTick` that advances the game state
    simulateGameTick(); // This is a placeholder for actual game state manipulation
    const updatedScoreElement = screen.getByText(/Score: 1/i);
    expect(updatedScoreElement).toBeInTheDocument();
});

// Placeholder function for advancing the game state
function simulateGameTick() {
    // Implement the logic to advance the game state and make the snake eat food
    // This might involve manipulating state directly or using a mock implementation
}