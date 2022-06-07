import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3rkaC9_bI180TynPkaZGKHaFQ0WaZYco",
  authDomain: "generic-store-a7cc4.firebaseapp.com",
  projectId: "generic-store-a7cc4",
  storageBucket: "generic-store-a7cc4.appspot.com",
  messagingSenderId: "249509784061",
  appId: "1:249509784061:web:25844e89582fd9f6e2d194",
  measurementId: "G-QY41635N9Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
