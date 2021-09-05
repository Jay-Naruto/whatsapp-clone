// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBYhmPEHBgzZeEgoqFJ5FjcyBInQtgvDmk",
    authDomain: "whatsapp-mern-aed24.firebaseapp.com",
    projectId: "whatsapp-mern-aed24",
    storageBucket: "whatsapp-mern-aed24.appspot.com",
    messagingSenderId: "732367151930",
    appId: "1:732367151930:web:bdd0f2dde3976824c72603",
    measurementId: "G-RSMJKT4J0W"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export { auth, provider};
  export default db