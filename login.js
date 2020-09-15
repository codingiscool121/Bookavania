 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBPFXtFvd8avBfAX450rPu0iEaUXA9PlG8",
  authDomain: "login-password-database.firebaseapp.com",
  databaseURL: "https://login-password-database.firebaseio.com",
  projectId: "login-password-database",
  storageBucket: "login-password-database.appspot.com",
  messagingSenderId: "566191205883",
  appId: "1:566191205883:web:2b2327f0ed4dd3f73aef5e",
  // measurementId: "G-WCWXMZNXHS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth()

function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  var email = user.email;
  alert("You have successfully signed up," + email)
}

function signIn(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  var email = user.email;
  alert("You have successfully signed in," + email);

  //Take user to different or home page

}


// function signOut(){
//   auth.signOut();
//   var email = user.email;
//   alert("You have successfully signed out,"+email)
// }


auth.onAuthStateChanged(function(user){
if(user){
//is signed in 
var email = user.email;
alert(" Thanks for signing in to Bookavania, "+ email+ "! In this web app, you will be able to browse books, book reviews, book summaries and more. Click OK to finalize your login.");
window.location = "dashboard.html"
}else{
   alert("Please sign in to Bookavania, or sign up.")
  //no user is signed in 
}
})