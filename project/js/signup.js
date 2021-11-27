var username = document.getElementById("username") ;
var useremail = document.getElementById("email") ; 
var userpass = document.getElementById("password") ; 
var confirmpass = document.getElementById("Confirmpass") ;
function checkemail() {
    if (useremail.value.length==0) {
        useremail.setCustomValidity("Please fill this field");
    }
    else {
        useremail.setCustomValidity('');

    }
};
function validatePassword(){
    if(userpass.value != confirmpass.value) {
        confirmpass.setCustomValidity("Passwords Don't Match");
    } else {
        confirmpass.setCustomValidity('');
    }
};
userpass.onchange = validatePassword;
confirmpass.onkeyup = validatePassword;
