
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
  apiKey: "AIzaSyB_gA2dgInYxxmj9ybyRdVkrLEHlQI1iqw",
  authDomain: "linkedin-clone1-ca116.firebaseapp.com",
  projectId: "linkedin-clone1-ca116",
  storageBucket: "linkedin-clone1-ca116.appspot.com",
  messagingSenderId: "448040914584",
  appId: "1:448040914584:web:5cf68a7bf5407812a94aed",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };