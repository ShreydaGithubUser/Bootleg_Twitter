
  const firebaseConfig = {
    apiKey: "AIzaSyCDMRo-a8cnCBkpmp-it1JPCPVuLSCeLR4",
    authDomain: "kwitter-a6fad.firebaseapp.com",
    databaseURL: "https://kwitter-a6fad-default-rtdb.firebaseio.com",
    projectId: "kwitter-a6fad",
    storageBucket: "kwitter-a6fad.appspot.com",
    messagingSenderId: "59792493573",
    appId: "1:59792493573:web:10a2583795479f3f5ae06c",
    measurementId: "G-S2FV651KDQ"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);



function storestuff() {
    storing = document.getElementById("testingput").value;
    firebase.database().ref("/").child(storing).update({purpose : "test"})
    console.log("storing has been completed");
}