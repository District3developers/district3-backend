import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB03s2b--DGzArCXiGN_-BASUKF0rKyHDE",
  appId: '1:578577272151:web:f777b6a0fb288250b60212',
  authDomain: 'district3-backend.firebaseapp.com',
  databaseURL: 'https://district3-backend-default-rtdb.firebaseio.com',
  messagingSenderId: '578577272151',
  projectId: 'district3-backend',
  storageBucket: 'district3-backend.appspot.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
