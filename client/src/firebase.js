// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e8155.firebaseapp.com",
  projectId: "real-estate-e8155",
  storageBucket: "real-estate-e8155.appspot.com",
  messagingSenderId: "487266764910",
  appId: "1:487266764910:web:98635a0f0f945721b43e7f",
  measurementId: "G-50BY36BV8P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);