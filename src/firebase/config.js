import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA09fZG-vaRFIJ6DjYWibdu0SzHbp22U6M",
  authDomain: "catcake-a563c.firebaseapp.com",
  projectId: "catcake-a563c",
  storageBucket: "catcake-a563c.appspot.com",
  messagingSenderId: "544050406495",
  appId: "1:544050406495:web:048f078a1bbae69ee5e7ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)