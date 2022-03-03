import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCh1nj7_jE0BQbEzgjtsFF33NmbylucojA",
  authDomain: "fir-tuitorial-d8597.firebaseapp.com",
  projectId: "fir-tuitorial-d8597",
  storageBucket: "fir-tuitorial-d8597.appspot.com",
  messagingSenderId: "896336085415",
  appId: "1:896336085415:web:b1846f63976aa2036b3682"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };