import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDYOMfRewIJ5VaEte73Pm7YocKU1RfKut4",
  authDomain: "ecommerce-franco-dos.firebaseapp.com",
  projectId: "ecommerce-franco-dos",
  storageBucket: "ecommerce-franco-dos.appspot.com",
  messagingSenderId: "1013382500113",
  appId: "1:1013382500113:web:fac97c865d6447270846b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)