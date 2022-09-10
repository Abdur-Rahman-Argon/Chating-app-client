// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6XFPWoXXmxsr3O7a64-15Xfeq6CF9aOQ",
  authDomain: "chating-app-17a67.firebaseapp.com",
  projectId: "chating-app-17a67",
  storageBucket: "chating-app-17a67.appspot.com",
  messagingSenderId: "206306756742",
  appId: "1:206306756742:web:c04e0353ee37a9254f6907",
  measurementId: "G-3TMLTG2RNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;