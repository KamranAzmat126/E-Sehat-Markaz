// Import the functions you need from the SDKs you n
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhJNxemcjVqalcBDyxcZ_DPNiHA-kxBK0",
  authDomain: "e-sehat-markaz-b0c3d.firebaseapp.com",
  projectId: "e-sehat-markaz-b0c3d",
  storageBucket: "e-sehat-markaz-b0c3d.appspot.com",
  messagingSenderId: "188519249613",
  appId: "1:188519249613:web:a7a5a1e8f83092d8209b84",
  measurementId: "G-224Y8SRY1Z"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
}
else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
