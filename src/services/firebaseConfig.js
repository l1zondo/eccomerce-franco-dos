import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCN6nPxKc1rpluBKO4SxS9Ilz1K5djd7tc",
  authDomain: "react-coder-b0306.firebaseapp.com",
  projectId: "react-coder-b0306",
  storageBucket: "react-coder-b0306.appspot.com",
  messagingSenderId: "269885246811",
  appId: "1:269885246811:web:cedba3fb85fa0bd73d1e7e",
  measurementId: "G-KMCQVWVQ15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)