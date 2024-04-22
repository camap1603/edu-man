import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_VGZPpLOExnazTi6OE6KOy3e8dgLiXko",
  authDomain: "education-a232d.firebaseapp.com",
  projectId: "education-a232d",
  storageBucket: "education-a232d.appspot.com",
  messagingSenderId: "923346817114",
  appId: "1:923346817114:web:ce812ef82afeddf9648863",
  measurementId: "G-KKP7LJ4D24"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
