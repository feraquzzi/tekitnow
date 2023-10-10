const firebaseConfig = {
    apiKey: "AIzaSyCpG2_QlgXJDeUcMVsPudVOjr812FqJH-U",
    authDomain: "tekitnow-f4a51.firebaseapp.com",
    databaseURL: "https://tekitnow-f4a51-default-rtdb.firebaseio.com",
    projectId: "tekitnow-f4a51",
    storageBucket: "tekitnow-f4a51.appspot.com",
    messagingSenderId: "1055664792882",
    appId: "1:1055664792882:web:c717b11b3f30008d4ba32b"
};

firebase.initializeApp(firebaseConfig);

// Reference newsletter collection
var emailRef = firebase.database().ref('Newsletter Subscription'); 

// Listen for form submit
document.getElementById('newsletter').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();


  //Get value
  var email = getInputVal('email');
 

  // Save email
  saveMessage(email);

  
  // Clear form
  document.getElementById('newsletter').reset();
  //console.log('hello')
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save email to firebase
function saveMessage(email){
  var newEmailRef = emailRef.push();
  newEmailRef.set({
    email: email
  });
}