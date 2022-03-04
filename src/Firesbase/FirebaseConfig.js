import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';

import {
  getAuth,
  connectAuthEmulator,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyA_z3PR0zmajaS7UFXjHljPSc6aAIqUSvs',
  authDomain: 'shopping-675ef.firebaseapp.com',
  databaseURL:
    'https://shopping-675ef-default-rtdb.firebaseio.com',
  projectId: 'shopping-675ef',
  storageBucket: 'shopping-675ef.appspot.com',
  messagingSenderId: '342522095339',
  appId: '1:342522095339:web:347782fb938ec1b23d80ae',
  measurementId: 'G-E7CM35QTH1',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
connectAuthEmulator(auth, 'http://localhost:9099');

// firebaseApps previously initialized using initializeApp()
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);
export { app, auth, db };
