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

// Reference messages collection
var registrationRef = firebase.database().ref('registration'); 

// Listen for form submit
document.getElementById('registrationForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  var course = document.getElementById("course");
  var study = document.getElementById("studyType");
  var days = document.getElementById("programDay");  

  //Get value
  var firstname = getInputVal('firstname');
  var surname = getInputVal('surname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var city = getInputVal('city');
  var state = getInputVal('state');
  var age = getInputVal('age');
  var coursetype = course.value;
  var studytype = study.value;
  var programday = days.value;
 

  // Save message
  saveMessage(firstname, surname, email, phone, city, state, age, coursetype, studytype, programday, gender);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('registrationForm').reset();
  //console.log('hello')
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, surname, email, phone, city, state, age, coursetype, studytype, programday){
  var newRegistrationRef = registrationRef.push();
  newRegistrationRef.set({
    firstname: firstname,
    surname: surname,
    email: email,
    phone: phone,
    city: city,
    state: state,
    age: age,
    courseofinterest: coursetype,
    studytype: studytype,
    programday: programday
  });
}