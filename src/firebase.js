import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA36fMKnVLK6iZ3ZujyOpoMDMbTIIxTtco",
  authDomain: "sociomeet-7d9d9.firebaseapp.com",
  projectId: "sociomeet-7d9d9",
  storageBucket: "sociomeet-7d9d9.appspot.com",
  messagingSenderId: "290331907555",
  appId: "1:290331907555:web:dbddef770f6857b1c27cd6",
  measurementId: "G-NEPHP711J4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);