// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbcul0ID6SEtFsd9MQy_SS3LV1wg45HAo",
  authDomain: "react-auth-mohamilon.firebaseapp.com",
  projectId: "react-auth-mohamilon",
  storageBucket: "react-auth-mohamilon.appspot.com",
  messagingSenderId: "306012999770",
  appId: "1:306012999770:web:f417a6a35994867ce50863",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
