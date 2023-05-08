// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXbEiCTVza8u8A6509gn4_et3sWPNabhQ",
  authDomain: "notesappreactnative.firebaseapp.com",
  projectId: "notesappreactnative",
  storageBucket: "notesappreactnative.appspot.com",
  messagingSenderId: "888490905508",
  appId: "1:888490905508:web:103ec9799ba10a3384bb31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)