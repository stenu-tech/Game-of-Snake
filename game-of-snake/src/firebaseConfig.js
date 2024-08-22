// src/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAolMlAj3_m3DdaunuVXP3TsVuwPcfgJCI",
    authDomain: "my-awesome-portfolio-pro-55988.firebaseapp.com",
    projectId: "my-awesome-portfolio-pro-55988",
    storageBucket: "my-awesome-portfolio-pro-55988.appspot.com",
    messagingSenderId: "450531068672",
    appId: "1:450531068672:web:c1228b2a113e4daee901e5",
    measurementId: "G-E8WNGFP4YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };