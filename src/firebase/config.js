import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBjov09GatKOmnpKspWHQySV-Zfx7tTH4A",
  authDomain: "learn-sphere-app.firebaseapp.com",
  projectId: "learn-sphere-app",
  storageBucket: "learn-sphere-app.firebasestorage.app",
  messagingSenderId: "616607041445",
  appId: "1:616607041445:web:34b85e740a41608e0d0a4c",
  measurementId: "G-TQ1B5JCB44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };