import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCxamLjIcy6SgykRc2HMZcGqveaerefmbM",
    authDomain: "newgensurvey.firebaseapp.com",
    databaseURL: "https://newgensurvey.firebaseio.com",
    projectId: "newgensurvey",
    storageBucket: "newgensurvey.appspot.com",
    messagingSenderId: "264660713982",
    appId: "1:264660713982:web:d8f81350925baf5e6e40af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();