// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpumuNp1t4N-_q09HzKfQG2P0iy-tXbLw",
  authDomain: "financely-by-mee.firebaseapp.com",
  projectId: "financely-by-mee",
  storageBucket: "financely-by-mee.appspot.com",
  messagingSenderId: "581046682490",
  appId: "1:581046682490:web:38aa86bac84dc726308cc3",
  measurementId: "G-EL3MQ67B1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };