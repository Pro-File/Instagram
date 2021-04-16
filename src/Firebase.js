import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

 // Your web app's Firebase configuration
 var firebaseConfig = {
apiKey: "AIzaSyCmirjvjCP9y9s3t_QYQF18F4v9pVoCUdY",
authDomain: "insta-net.firebaseapp.com",
projectId: "insta-net",
storageBucket: "insta-net.appspot.com",
messagingSenderId: "915275214410",
appId: "1:915275214410:web:4371e4ce45c3b43d5640b3",
measurementId: "G-PM5RRW8QPR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export var auth = firebase.auth();
  export var firestore = firebase.firestore();
  export var googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
  export var serverTimestamp = () => {
    return firebase.firestore.FieldValue.serverTimestamp();
  };
  export var storage = firebase.storage().ref();

  export default firebase;
