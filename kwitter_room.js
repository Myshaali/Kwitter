const config = {
apiKey: "AIzaSyCNXbKQJ55qr1Ov2QFajuHpD6lXcPgD_kQ",
  authDomain: "kwitter-48e6b.firebaseapp.com",
  projectId: "kwitter-48e6b",
  storageBucket: "kwitter-48e6b.appspot.com",
  messagingSenderId: "460532202030",
  appId: "1:460532202030:web:ff2351ff2439921b4bfdbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
