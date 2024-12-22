import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGgQidHV8YsXt1h2eMhRnXNK-AwlLblN4", // Remplacé par votre clé API
  authDomain: "fast-diagram.firebaseapp.com",       // Remplacé par votre domaine d'authentification
  projectId: "fast-diagram",                        // Remplacé par votre ID de projet
  storageBucket: "fast-diagram.appspot.com",        // Remplacé par votre bucket de stockage
  messagingSenderId: "144842607255",                // Remplacé par votre ID d'expéditeur
  appId: "1:144842607255:web:95df70992d506d78f337d2", // Remplacé par votre ID d'application
};


// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);