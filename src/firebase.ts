import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtn0JE0u7nJkAzcYtqbmAYQgvNCZGO-yM",
  authDomain: "neurohaven-d1554.firebaseapp.com",
  projectId: "neurohaven-d1554",
  storageBucket: "neurohaven-d1554.firebasestorage.app",
  messagingSenderId: "680940589595",
  appId: "1:680940589595:web:d2dabecb6292e0bf651ebe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
