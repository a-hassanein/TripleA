function formValid(e){
    var email=document.getElementById("mail")
    var name=document.getElementById("name")
    if(email.value==""){
        e.preventDefault
    }
    else if(name.value.length<3){
        e.perventDefault
    }
    else{
        
        e.target.submit
        
    }
    
}  