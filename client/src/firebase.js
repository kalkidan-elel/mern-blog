// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-7737f.firebaseapp.com",
    projectId: "mern-blog-7737f",
    storageBucket: "mern-blog-7737f.appspot.com",
    messagingSenderId: "687152278004",
    appId: "1:687152278004:web:d8604d343fed24f5d071a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);