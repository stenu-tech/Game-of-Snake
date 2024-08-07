// lib/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export { db };