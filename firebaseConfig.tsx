// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB-DdQYHVkYhROrLqLIOWPYtarZdwy9A0Q",
  authDomain: "orakle-74531.firebaseapp.com",
  projectId: "orakle-74531",
  storageBucket: "orakle-74531.appspot.com",
  messagingSenderId: "84762977618",
  appId: "1:84762977618:web:1889f3172f74e2146a868b",
  measurementId: "G-K72KHW0G95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth}