import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEnLYqCtymHm1PcKFQRJEl7AzMeNlX0JY",
  authDomain: "portfolio-43ee8.firebaseapp.com",
  projectId: "portfolio-43ee8",
  storageBucket: "portfolio-43ee8.appspot.com",
  messagingSenderId: "481408167601",
  appId: "1:481408167601:web:eabf6944181d481c9a3c90",
  measurementId: "G-ELJLW9P3YV",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
