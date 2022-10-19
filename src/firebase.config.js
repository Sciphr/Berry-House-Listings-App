// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAmHXB-t-3D00MLGWsBiabdSUyYNEM8QE',
  authDomain: 'berry-house-listings.firebaseapp.com',
  projectId: 'berry-house-listings',
  storageBucket: 'berry-house-listings.appspot.com',
  messagingSenderId: '377184721796',
  appId: '1:377184721796:web:b99158e0736b39c77b5bd1',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
