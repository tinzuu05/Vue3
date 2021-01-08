import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxqD07mTcOm9SukKELzsR76Vp93NgubxQ",
    authDomain: "vue3-firebase-site1.firebaseapp.com",
    projectId: "vue3-firebase-site1",
    storageBucket: "vue3-firebase-site1.appspot.com",
    messagingSenderId: "546641444235",
    appId: "1:546641444235:web:f48d05cc5fdd30ee74438e"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }