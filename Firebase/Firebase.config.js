// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFkARcNhbvtiNHRneI-x0zKFUMuVRnqnQ",
  authDomain: "notesapp-30089.firebaseapp.com",
  projectId: "notesapp-30089",
  storageBucket: "notesapp-30089.appspot.com",
  messagingSenderId: "504275464422",
  appId: "1:504275464422:web:35984c86eb3e6942c2cb27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)