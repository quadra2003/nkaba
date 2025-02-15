// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoorE9viUr53JWqP2yAR_jhz0rBx4zGWQ",
  authDomain: "nkaba-69785.firebaseapp.com",
  projectId: "nkaba-69785",
  storageBucket: "nkaba-69785.firebasestorage.app",
  messagingSenderId: "648615995478",
  appId: "1:648615995478:web:5bf6dbe8a39f82080f33f7",
  measurementId: "G-GWNWWK4HK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
