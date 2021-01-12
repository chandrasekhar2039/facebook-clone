// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkwqgsi9mTQwFL_6IRkquMjb1cTYs9aiY",
  authDomain: "facebook-clone-react-c8892.firebaseapp.com",
  databaseURL: "https://facebook-clone-react-c8892.firebaseio.com",
  projectId: "facebook-clone-react-c8892",
  storageBucket: "facebook-clone-react-c8892.appspot.com",
  messagingSenderId: "199658546203",
  appId: "1:199658546203:web:93a1e8048ea7fa767744be",
  measurementId: "G-GJDTT6WQ0E"
};

const firebaseapp =Firebase.initializeApp(firebaseConfig);

const db=firebaseapp.firestore();

const auth=Firebase.auth();

const provider = new Firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
