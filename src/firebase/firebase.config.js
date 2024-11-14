// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjbn_3V7BNC8Os930a9tSxy8FMwkE6T3E",
    authDomain: "dragon-news-auth-b58ad.firebaseapp.com",
    projectId: "dragon-news-auth-b58ad",
    storageBucket: "dragon-news-auth-b58ad.firebasestorage.app",
    messagingSenderId: "747008016365",
    appId: "1:747008016365:web:1d3657ff24ad4e31fe31e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;