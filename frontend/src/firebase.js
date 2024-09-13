// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ahmad-blog-1ef34.firebaseapp.com",
  projectId: "ahmad-blog-1ef34",
  storageBucket: "ahmad-blog-1ef34.appspot.com",
  messagingSenderId: "798208681687",
  appId: "1:798208681687:web:cfff51d6cd7a727680f292",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
