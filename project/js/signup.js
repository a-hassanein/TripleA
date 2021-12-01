function savedata(){
    var username = document.getElementById("username") ;
    var useremail = document.getElementById("email") ; 
    var userpass = document.getElementById("password") ; 
    var confirmpass = document.getElementById("Confirmpass") ;
    localStorage.setItem("name", username.value);
    localStorage.setItem("email", useremail.value);
    localStorage.setItem("pass", userpass.value);
    localStorage.setItem("confirmpassword", confirmpass.value);

}
//////////////////////////////////////////////////////////////////////////////////////
function validatePassword(){
    var userpass = document.getElementById("password") ; 
    var confirmpass = document.getElementById("Confirmpass") ;
    if(userpass.value !== confirmpass.value) {
        confirmpass.setCustomValidity("Passwords Don't Match");
        return false;
    } else {
        confirmpass.setCustomValidity('');
        return true;
    }
};
/////////////////////////////////////////////////////////////////////////////////////////
function checkpass(validatePassword)
{
    var userpass = document.getElementById("password") ; 
    var confirmpass = document.getElementById("Confirmpass") ;
    userpass.onchange = validatePassword;
    confirmpass.onkeyup = validatePassword;
}
///////////////////////////////////////////////////////////////////////////////////////
function validateEmail(){
    var userEmail = document.getElementById("email") ; 
    var SortedEmail =  localStorage.getItem("email");
    if(userEmail.value === SortedEmail) {
        userEmail.setCustomValidity("this email exists");
        return false;
    } else {
        userEmail.setCustomValidity('');
        return true;
    }
}
function checkpass(validateEmail)
{
    var userEmail = document.getElementById("email") ; 
    userEmail.onkeyup = validateEmail;
}
//////////////////////////////////////////////////////////////////////////////////////