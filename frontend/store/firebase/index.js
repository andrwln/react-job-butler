import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'react-jb.firebaseapp.com',
  databaseURL: 'https://react-jb.firebaseio.com',
  projectId: 'react-jb',
  storageBucket: 'react-jb.appspot.com',
  messagingSenderId: '146368152704'
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const db = firebaseApp.firestore();

db.settings({
  timestampsInSnapshots: true
});

export default db;
