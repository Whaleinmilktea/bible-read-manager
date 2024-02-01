// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6gUDLVeGfwvNz13Yi2JLuxUYQtl5H_Fg",
  authDomain: "bible-read-cycle.firebaseapp.com",
  projectId: "bible-read-cycle",
  storageBucket: "bible-read-cycle.appspot.com",
  messagingSenderId: "349756127406",
  appId: "1:349756127406:web:9d2c76e615832e6cd1153f",
  measurementId: "G-721E0NX0FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);