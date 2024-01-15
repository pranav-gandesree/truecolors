// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6TIo3txsKz4zP2Gys1gdY0d325b2HGpY",
  authDomain: "truecolorswebsite.firebaseapp.com",
  projectId: "truecolorswebsite",
  storageBucket: "truecolorswebsite.appspot.com",
  messagingSenderId: "730979033197",
  appId: "1:730979033197:web:dd971a1e02e2560fd81f64",
  measurementId: "G-7RCFTDBMBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
