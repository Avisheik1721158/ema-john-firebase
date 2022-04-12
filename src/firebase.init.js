// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCd0HjbvyMOzl1VWm-2KjrIeqZ8M-GAJ7w",
    authDomain: "ema-john-simple-d31ff.firebaseapp.com",
    projectId: "ema-john-simple-d31ff",
    storageBucket: "ema-john-simple-d31ff.appspot.com",
    messagingSenderId: "551090043083",
    appId: "1:551090043083:web:bbf199b0bfa378fed9434e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;