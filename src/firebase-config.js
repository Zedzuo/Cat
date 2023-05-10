import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAgQm0yD9wuc6pbjQKT7_T41qOToJHnqs",
  authDomain: "fir-e591c.firebaseapp.com",
  projectId: "fir-e591c",
  storageBucket: "fir-e591c.appspot.com",
  messagingSenderId: "339777888589",
  appId: "1:339777888589:web:1bdf5565a8d70d21391704",
  measurementId: "G-8R7VN58C1M"
};

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);