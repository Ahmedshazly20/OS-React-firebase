// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALCFl9DQXXjSK4A9qfwGNVJQuhmWHP3j4",
  authDomain: "todo-os.firebaseapp.com",
  projectId: "todo-os",
  storageBucket: "todo-os.appspot.com",
  messagingSenderId: "247236484121",
  appId: "1:247236484121:web:514650ed6cc7a548a85e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase

const db = getFirestore(app);

export  {db}