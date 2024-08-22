// src/Game.js
import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Game = () => {
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "your-collection-name"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Typography variant="h2">Game of Snake</Typography>
            <Typography variant="body1">
                Use the arrow keys to direct the snake. The snake will grow in length as it consumes the food. The game ends when the snake collides with the wall or itself.
            </Typography>
        </Container>
    );
};

export default Game;