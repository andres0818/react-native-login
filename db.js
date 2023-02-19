// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4EwTYtV9t9Q2icfMjwjJ_dHuZFZsBYgk",
  authDomain: "proyecto-dos-autenticacion.firebaseapp.com",
  projectId: "proyecto-dos-autenticacion",
  storageBucket: "proyecto-dos-autenticacion.appspot.com",
  messagingSenderId: "764407581000",
  appId: "1:764407581000:web:b20595a71a9bb7801c4b7d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 export const auth= () => {
   getAuth(app)
 }