// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4kTovXeUXS7Sl4Aq_LwCK5xicT9Xv8qE",
  authDomain: "fb-database-e088a.firebaseapp.com",
  projectId: "fb-database-e088a",
  storageBucket: "fb-database-e088a.appspot.com",
  messagingSenderId: "1086951444535",
  appId: "1:1086951444535:web:0ca364535a04f1adcf2fb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()