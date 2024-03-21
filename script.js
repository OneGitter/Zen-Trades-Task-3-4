const secretKey = "abcd";
const pass="216\"RVR";


function hashPassword(password) {
    var hashedPassword = "";
    for (var i = 0; i < password.length; i++) {
      hashedPassword += String.fromCharCode(password.charCodeAt(i) ^ secretKey.charCodeAt(i % secretKey.length));
    }
    return hashedPassword;
  }
  

function validateForm() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!passwordPattern.test(password)) {
      alert("Password must contain at least one uppercase letter, one number, and can only contain '@' as a special character.");
      return;
    }

    if(hashPassword(password)===pass) {
      console.log(window.location.href);
      window.location.href = window.location.href + "dashboard.html";
      // alert("Validation successful!");
    }
    else alert("Invalid Id or Password")


    
    return false;
  }