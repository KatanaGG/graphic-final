// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBozGRm3KUwh4QqBuVtpVEOIf5u9WrxCRU",
  authDomain: "graphic-final-event.firebaseapp.com",
  databaseURL: "https://graphic-final-event-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "graphic-final-event",
  storageBucket: "graphic-final-event.firebasestorage.app",
  messagingSenderId: "467648607302",
  appId: "1:467648607302:web:950706569cfff3b36e4647",
  measurementId: "G-XCDG4W1C47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);