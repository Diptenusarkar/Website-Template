function check(event){
    event.preventDefault();
    var email1=document.getElementById('mail');
    var passd1=document.getElementById('pswd');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
        if(email1.value.match(mailformat) && passd1.value.match(passformat)){
            error.textContent= "Done";
            error.style.color = "green";
            error.style.marginTop="10px";
            error.style.fontSize="1.3rem";
            error.style.fontWeight="400px";

        } 
        else{
            error.textContent = "Invalid username/email";
            error.style.color = "red";
            error.style.marginTop="10px";
            error.style.fontSize="1.3rem";
            error.style.fontWeight="400px";
            return false;
        }
        


}