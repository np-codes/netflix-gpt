// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuC2GpD_6SPyFHqAvPpJ2E7TRhzUHI_G4",
  authDomain: "netflixgpt-5047c.firebaseapp.com",
  projectId: "netflixgpt-5047c",
  storageBucket: "netflixgpt-5047c.appspot.com",
  messagingSenderId: "599666075244",
  appId: "1:599666075244:web:01bc27c963722590ddda49",
  measurementId: "G-KYV23JB714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();