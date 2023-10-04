// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-BwKvumPFOqRxz_eDD2Lh4hY1pJo8zCw",
  authDomain: "video-gpt-3ad36.firebaseapp.com",
  projectId: "video-gpt-3ad36",
  storageBucket: "video-gpt-3ad36.appspot.com",
  messagingSenderId: "564468218194",
  appId: "1:564468218194:web:078a3ff35e1861fccba28b",
  measurementId: "G-VN162M17KZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
