import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyCxamLjIcy6SgykRc2HMZcGqveaerefmbM",
//     authDomain: "newgensurvey.firebaseapp.com",
//     databaseURL: "https://newgensurvey.firebaseio.com",
//     projectId: "newgensurvey",
//     storageBucket: "newgensurvey.appspot.com",
//     messagingSenderId: "264660713982",
//     appId: "1:264660713982:web:d8f81350925baf5e6e40af"
//   };
  var firebaseConfig = {
    apiKey: "AIzaSyALxmqNyWJyAX2nRKrbEPwiyJExW7HUM5A",
    authDomain: "serveydesigner.firebaseapp.com",
    databaseURL: "https://serveydesigner-default-rtdb.firebaseio.com",
    projectId: "serveydesigner",
    storageBucket: "serveydesigner.appspot.com",
    messagingSenderId: "423219285622",
    appId: "1:423219285622:web:87213a87de039f57c71957"
  };
  // Initialize Firebase
  var fireDb=firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();