import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDhmjqBIsd2euDF9v4zsVcKZtYNndNEODk",
    authDomain: "likaapp-d1b74.firebaseapp.com",
    databaseURL: "https://likaapp-d1b74.firebaseio.com",
    projectId: "likaapp-d1b74",
    storageBucket: "likaapp-d1b74.appspot.com",
    messagingSenderId: "190407371383",
    appId: "1:190407371383:web:59cab279aaec31d8c6b472",
    measurementId: "G-59MYWF99FZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;