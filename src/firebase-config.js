import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqS9JH9Pakx3-b6QlcJMML9ug4iGquqxo",
  authDomain: "oluwafemifirebase.firebaseapp.com",
  databaseURL: "https://oluwafemifirebase-default-rtdb.firebaseio.com",
  projectId: "oluwafemifirebase",
  storageBucket: "oluwafemifirebase.appspot.com",
  messagingSenderId: "750147904443",
  appId: "1:750147904443:web:4a4d0214dd46dacabb9a9e",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export { db, app, auth };
