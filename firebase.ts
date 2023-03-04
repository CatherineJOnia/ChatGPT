import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgzGuy1cA_hcWDk667tgYW8qkSpgPM4Zo",
  authDomain: "chatgpt-onia.firebaseapp.com",
  projectId: "chatgpt-onia",
  storageBucket: "chatgpt-onia.appspot.com",
  messagingSenderId: "17714169831",
  appId: "1:17714169831:web:f14b12f1f5ca47ef6c1f42",
  measurementId: "G-9N03S5EMSC"
};

const app = getApps().length ? getApp() : initializieApp(firebaseConfig);
const db = getFirestore(app);

export { db };
