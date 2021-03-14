import React,{useEffect} from "react"
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRQn5ozf1DBbGAfsvNP1OuEW9eWpxNimo",
    authDomain: "egodb-4fcab.firebaseapp.com",
    projectId: "egodb-4fcab",
    storageBucket: "egodb-4fcab.appspot.com",
    messagingSenderId: "257906258032",
    appId: "1:257906258032:web:9f55faed9faba1749484b5"
  };

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore()