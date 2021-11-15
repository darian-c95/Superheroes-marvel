import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
    
const firebaseConfig = {
    apiKey: "AIzaSyCW3JMAuAAWP1e5uE8kRC4QWWeQBoKcaDI",
    authDomain: "react-app-heroes.firebaseapp.com",
    projectId: "react-app-heroes",
    storageBucket: "react-app-heroes.appspot.com",
    messagingSenderId: "9529166087",
    appId: "1:9529166087:web:947200d1c62ecb64925da2"
};
   
firebase.initializeApp(firebaseConfig); 

const db = firebase.firestore(); 

export {
    db, 
    firebase 
}   