import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App'
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeJFcYrmNxq14xz79G0y4z-nakqJeYKJg",
  authDomain: "store-d83c7.firebaseapp.com",
  projectId: "store-d83c7",
  storageBucket: "store-d83c7.appspot.com",
  messagingSenderId: "374248375051",
  appId: "1:374248375051:web:70df6ea71cc6769c7ed80e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









