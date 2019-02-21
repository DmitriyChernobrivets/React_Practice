import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyCQ9gret59EjSnjZJGjwMvLT07dudka9-k",
    authDomain: "dima-dashboard.firebaseapp.com",
    databaseURL: "https://dima-dashboard.firebaseio.com",
    projectId: "dima-dashboard",
    storageBucket: "dima-dashboard.appspot.com",
    messagingSenderId: "655839151149"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;