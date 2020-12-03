import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDUKqBP0ox2jRhYFPM2gsH1qtcKcsngmqQ",
    authDomain: "surveybuilder-ab47b.firebaseapp.com",
    databaseURL: "https://surveybuilder-ab47b.firebaseio.com",
    projectId: "surveybuilder-ab47b",
    storageBucket: "surveybuilder-ab47b.appspot.com",
    messagingSenderId: "291225973280",
    appId: "1:291225973280:web:9336e4a7011f0ab0b20245"
  };
  // Initialize Firebase
  var fireDb=firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();