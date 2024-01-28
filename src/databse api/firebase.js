// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcNJ3qdngM30yYrKLrFi8G5NTqG4i_LbE",
  authDomain: "helping-hands-cfde5.firebaseapp.com",
  projectId: "helping-hands-cfde5",
  storageBucket: "helping-hands-cfde5.appspot.com",
  messagingSenderId: "1039330109680",
  appId: "1:1039330109680:web:2ef21da4a3cd2a77b27a35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);