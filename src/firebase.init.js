// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDJ1fBLY9fzAJJUTaJpyuAYd3fDXSikP0",
  authDomain: "grocery-warehouse-7968d.firebaseapp.com",
  projectId: "grocery-warehouse-7968d",
  storageBucket: "grocery-warehouse-7968d.appspot.com",
  messagingSenderId: "427528601062",
  appId: "1:427528601062:web:8f82a0978fb90eea506a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth