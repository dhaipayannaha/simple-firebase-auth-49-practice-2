// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMyE8YTbyTRuOaAakkaAAQhoi0Axg6CHY",
  authDomain: "project-2-9a1e6.firebaseapp.com",
  projectId: "project-2-9a1e6",
  storageBucket: "project-2-9a1e6.firebasestorage.app",
  messagingSenderId: "786968079325",
  appId: "1:786968079325:web:05cf30a2b5a514a4266434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);