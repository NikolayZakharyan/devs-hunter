import firebase from 'firebase/app';
import 'firebase/auth';

// console.log(firebase)

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   projectId: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = firebase.initializeApp({
  apiKey: 'AIzaSyC1N-CVD9zZGVfLAfP3qFjcZefKP1_4-kg',
  authDomain: 'devshunter-try-1.firebaseapp.com',
  projectId: 'devshunter-try-1',
  storageBucket: 'devshunter-try-1.appspot.com',
  messagingSenderId: '32895425314',
  appId: '1:32895425314:web:205a1f4e86e049f040237b',
});

export const auth = app.auth();
export default app;
