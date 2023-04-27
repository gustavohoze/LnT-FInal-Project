const firebaseConfig = {
  apiKey: "AIzaSyAoK5ILLqOshUfNw504jer1i10ysyOk4o0",

  authDomain: "pudding-fest.firebaseapp.com",

  databaseURL: "https://pudding-fest-default-rtdb.firebaseio.com",

  projectId: "pudding-fest",

  storageBucket: "pudding-fest.appspot.com",

  messagingSenderId: "702216491745",

  appId: "1:702216491745:web:3b2dc9dfc0742e1667dda0",

  measurementId: "G-BMPQQEEE6Q"

  //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var ContactFormDB = firebase.database().ref("ContactForm");



document.getElementById("registration-form").addEventListener("submit",function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var event = document.getElementById("event").value;


  // saveMessages(name, email, phone,event);

  //   enable alert
  // document.querySelector(".alert").style.display = "block";

  //   remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  //   reset the form
  document.getElementById("registration-form").reset();
  var newContactForm = ContactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    phone: phone,
    event: event
  });
} );



// const saveMessages = (name, email, phone,event) => {
  
// };

const getElementVal = (id) => {
  return document.getElementById(id).value;
};