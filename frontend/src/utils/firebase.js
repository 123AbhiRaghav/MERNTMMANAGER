// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "promanager-77ec6.firebaseapp.com",
  projectId: "promanager-77ec6",
  storageBucket: "promanager-77ec6.appspot.com",
  messagingSenderId: "395445228359",
  appId: "1:395445228359:web:fce3a36c32d5db0e887262"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);