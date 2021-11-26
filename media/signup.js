// get data from user (Sign Up)
var username = document.getElementById("username") ;
var useremail = document.getElementById("email") ; 
var userpass = document.getElementById("password") ; 
var confirmpass = document.getElementById("Confirmpass") ;
function CheckName() {
    if (username.length < 3 || username == "") {
        username.setCustomValidity("Please Follow the requiements");
    }
    else {
        username.setCustomValidity('');

    }
}
function validatePassword(){
    if(userpass.value != confirmpass.value) {
        confirmpass.setCustomValidity("Passwords Don't Match");
    } else {
        confirmpass.setCustomValidity('');
    }
  }
  userpass.onchange = validatePassword;
  confirmpass.onkeyup = validatePassword;