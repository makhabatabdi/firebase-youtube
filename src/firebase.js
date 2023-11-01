// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOEtGZ8a1WZKRQ1iBzcjY8ZVQhUhi5lUE",
  authDomain: "fir-ee9ae.firebaseapp.com",
  projectId: "fir-ee9ae",
  storageBucket: "fir-ee9ae.appspot.com",
  messagingSenderId: "489505021247",
  appId: "1:489505021247:web:5b7f6ca87e7f6a47f9c78a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);