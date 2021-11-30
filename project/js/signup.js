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
function getdata(){
    var username = localStorage.getItem("name");
    var useremail = localStorage.getItem("email");
    var userpass = localStorage.getItem("pass");
    var confirmpass = localStorage.getItem("confirmpassword");
}
//////////////////////////////////////////////////////////////////////////////////////

var checked = true ; 
function test() 
{
    if (!checked)
    {
        event.preventDefault() ;
        document.getElementById("invalid").innerText= "❌ Please correct the validation errors first" ; 
    }
    else 
    {
        event.preventDefault() ; 
        var userName = document.getElementById("username").value; 
        var URL = "../html/Home.html?" + userName ; 
        window.location = URL ; 
    }
}