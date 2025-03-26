/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmcGKSP10UmKz4bHImpEIuoI0bBkONr08",
  authDomain: "react-project-ff532.firebaseapp.com",
  projectId: "react-project-ff532",
  storageBucket: "react-project-ff532.firebasestorage.app",
  messagingSenderId: "558456844020",
  appId: "1:558456844020:web:a660206fedb9b8af3e78a1",
  measurementId: "G-KR81Z48T60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();