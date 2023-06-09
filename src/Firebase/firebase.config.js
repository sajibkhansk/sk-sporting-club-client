// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCSf81rnzGnpWfKJ8zzguFInXLqz1XvlY",
  authDomain: "sk-sporting-club.firebaseapp.com",
  projectId: "sk-sporting-club",
  storageBucket: "sk-sporting-club.appspot.com",
  messagingSenderId: "957231411918",
  appId: "1:957231411918:web:4cbb17915b439c69a5169f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;