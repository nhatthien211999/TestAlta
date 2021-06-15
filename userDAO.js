  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjBH4c_GknyLuo3z05w1cyFMiTjZtN6wo",
    authDomain: "testalta-3e02b.firebaseapp.com",
    databaseURL: "https://testalta-3e02b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testalta-3e02b",
    storageBucket: "testalta-3e02b.appspot.com",
    messagingSenderId: "5223746676",
    appId: "1:5223746676:web:524670c9ebd732b3285521"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const dbRef = firebase.database().ref();


  const checkEmail = async (name) => {
    let a = true;

     dbRef.child("users").once("value", (snapshot) => {
      snapshot.forEach(element => { 
        if( element.val().name === name){
            console.log('failed')
            return false;
        }
      });
      
    });

    return true;
  }

  const checklogin = async (user) => {
     dbRef.child("users").once("value", (snapshot) => {
      snapshot.forEach(element => { 
        if( element.val().name === user.name && element.val().pass === user.pass){
            return true
        }
      });
      
    });

    return false;
  }

  const addNew = (user) => {
    dbRef.child("users").push(user);
}