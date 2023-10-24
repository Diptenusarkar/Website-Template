// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7jiufkyW8x4j6KFtjUAuCzG3T-1rKfEE",
  authDomain: "bysudhanshu.firebaseapp.com",
  projectId: "bysudhanshu",
  storageBucket: "bysudhanshu.appspot.com",
  messagingSenderId: "111591581995",
  appId: "1:111591581995:web:f3b95497e20e5a40dd7d6e",
  measurementId: "G-XPPMFZXQ35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);