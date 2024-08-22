// src/useHighScore.js
import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const useHighScore = () => {
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        const fetchHighScore = async () => {
            const docRef = doc(db, 'highScores', 'snakeGame');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) setHighScore(docSnap.data().score);
        };
        fetchHighScore();
    }, []);

    const saveHighScore = async (score) => {
        if (score > highScore) {
            await setDoc(doc(db, 'highScores', 'snakeGame'), { score });
            setHighScore(score);
        }
    };

    return { highScore, saveHighScore };
};

export default useHighScore;