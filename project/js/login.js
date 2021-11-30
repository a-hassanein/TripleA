function check(){
    var storedName = localStorage.getItem("name");
    var storedPw = localStorage.getItem("pass");

    var userName = document.getElementById("username") ; 
    var userPw = document.getElementById("password") ; 
    if(userName.value !== storedName || userPw.value !== storedPw){
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
/////////////////////////////////////////////////////////////////////////////////////////////////////
var checked = true ; 
function test(event) 
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