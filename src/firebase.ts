import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7IyoOPmtwPhgoW-KoUohM1pX8gRiaUcc",
  authDomain: "education1-ea77f.firebaseapp.com",
  projectId: "education1-ea77f",
  storageBucket: "education1-ea77f.appspot.com",
  messagingSenderId: "785359049633",
  appId: "1:785359049633:web:4c6370251235bbe09371e0",
  measurementId: "G-6D592YNF0L"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
