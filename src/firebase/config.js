// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5xlUYmMPS8itMNA5-6D2Yqspbv6pu3pA",
  authDomain: "journal-app-practice-1.firebaseapp.com",
  projectId: "journal-app-practice-1",
  storageBucket: "journal-app-practice-1.appspot.com",
  messagingSenderId: "437573599643",
  appId: "1:437573599643:web:a627f4decdf86df973613e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
