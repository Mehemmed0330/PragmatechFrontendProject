// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTKkSCBp6h4E3ru3ms7Ao2Nt6tXZdzTOU",
    authDomain: "auth-8186d.firebaseapp.com",
    projectId: "auth-8186d",
    storageBucket: "auth-8186d.appspot.com",
    messagingSenderId: "451981619315",
    appId: "1:451981619315:web:308daddec5244434137a06",
    measurementId: "G-8KWNLHMSZK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, db, provider, firestore, storage };
// const analytics = getAnalytics(app);