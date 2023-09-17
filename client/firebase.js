// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-a0b97.firebaseapp.com",
    projectId: "mern-auth-a0b97",
    storageBucket: "mern-auth-a0b97.appspot.com",
    messagingSenderId: "46589547644",
    appId: "1:46589547644:web:2e2b95661f69df88ce65f9",
    measurementId: "G-2T35N0XLKW"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);