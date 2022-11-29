import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// here we want to inport the seed file
// import { seedDatabase } from "../seed"; DO NOT UNCOMENT

const config = {
  apiKey: "AIzaSyD_j46yY-7XNilzzek-MnuOI2zYY-Z6jG4",
  authDomain: "instagram-clone-4848d.firebaseapp.com",
  projectId: "instagram-clone-4848d",
  storageBucket: "instagram-clone-4848d.appspot.com",
  messagingSenderId: "487573937211",
  appId: "1:487573937211:web:f37df22aa14aa9b422101e",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here we need to call the seed file only once
// seedDatabase(firebase); DO NOT UNCOMENT we do not want duplicate data

export { firebase, FieldValue };
