// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT-q6hsscBl2P2mUKrwlMZYExO9gecLcI",
  authDomain: "notereactmanagerment.firebaseapp.com",
  databaseURL: "https://notereactmanagerment-default-rtdb.firebaseio.com",
  projectId: "notereactmanagerment",
  storageBucket: "notereactmanagerment.appspot.com",
  messagingSenderId: "779180294748",
  appId: "1:779180294748:web:324b045b744af91aa2dc99",
  measurementId: "G-D7VPBYYPJ2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const dbRef = ref(getDatabase())
export const dbRefShow = ref(getDatabase(), 'noteData');
