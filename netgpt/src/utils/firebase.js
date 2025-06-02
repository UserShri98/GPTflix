// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyTAc3r_lZp4Ho9fhYSI5-gHxYzq4RW5Q",
  authDomain: "flixgpt-7f1dd.firebaseapp.com",
  projectId: "flixgpt-7f1dd",
  storageBucket: "flixgpt-7f1dd.firebasestorage.app",
  messagingSenderId: "951154322588",
  appId: "1:951154322588:web:eebe4a1bf2e8b1b59ed159",
  measurementId: "G-6E7EF1YCS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);