// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByiZB2Yf3bO-rxzbAAwxt9dys3155Qd8o",
  authDomain: "my-first-project-violetcv.firebaseapp.com",
  projectId: "my-first-project-violetcv",
  storageBucket: "my-first-project-violetcv.appspot.com",
  messagingSenderId: "653049962470",
  appId: "1:653049962470:web:cf59e7b1a8f6f74d004027",
  measurementId: "G-TMV9C2CTS1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);