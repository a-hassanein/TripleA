function check(){
    var storedName = localStorage.getItem("email");
    var storedPw = localStorage.getItem("pass");

    var useremail = document.getElementById("email") ; 
    var userPw = document.getElementById("password") ; 
    if(useremail.value !== storedName || userPw.value !== storedPw){
        userPw.setCustomValidity("Wrong data,Enter Another One");
    }else{
        userPw.setCustomValidity('');
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function checkpass(check)
{
    var useremail = document.getElementById("email") ; 
    var userPw = document.getElementById("password") ; 
    userPw.onchange = check;
    useremail.onkeyup = check;
}