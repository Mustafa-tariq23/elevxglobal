import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWDUFjRaZI_84aJR3VpAJcC22aojgR_Ec",
  authDomain: "elevexglobal-1.firebaseapp.com",
  projectId: "elevexglobal-1",
  storageBucket: "elevexglobal-1.firebasestorage.app",
  messagingSenderId: "928456038366",
  appId: "1:928456038366:web:2a62af3a46b8934721ef4f",
  measurementId: "G-ZW0YBY3NF8",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

// Ensure Firebase Auth is properly initialized before exporting
if (!auth) {
  console.error("Firebase Auth failed to initialize")
}

export { app, db, auth, storage }

