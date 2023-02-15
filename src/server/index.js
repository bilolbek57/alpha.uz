import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkx93VLk72Y00PGni8vCYJ_9m85trTcm0",
    authDomain: "alpha-d50a4.firebaseapp.com",
    projectId: "alpha-d50a4",
    storageBucket: "alpha-d50a4.appspot.com",
    messagingSenderId: "702939705396",
    appId: "1:702939705396:web:a852ca44daec37b5ffda61",
    measurementId: "G-923GGB9Z69"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
