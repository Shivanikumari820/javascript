function validate() {
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let pass = document.getElementById("pass");
    let copass = document.getElementById("co-pass");

    let errName = document.getElementById("err-name");
    let errNumber = document.getElementById("err-number");
    let errPass = document.getElementById("err-pass");
    let errCopass = document.getElementById("err-copass");

    let isValid = true;

    if (name.value.trim() === "") {
      errName.innerHTML = "Name is required";
      name.classList.add("error-input");
      isValid = false;
    } 

    else {
      errName.innerHTML = "";
      name.classList.remove("error-input");
    }

    if (number.value.trim() === "") {
      errNumber.innerHTML = "Number is required";
      number.classList.add("error-input");
      isValid = false;
    }
    
     else {
      errNumber.innerHTML = "";
      number.classList.remove("error-input");
    }

    if (pass.value.trim() === "") {
      errPass.innerHTML = "Password is required";
      pass.classList.add("error-input");
      isValid = false;
    } 
    else {
      errPass.innerHTML = "";
      pass.classList.remove("error-input");
    }

    if (copass.value.trim() === "") {
      errCopass.innerHTML = "Please confirm password";
      copass.classList.add("error-input");
      isValid = false;
    } 
    
    else if (copass.value !== pass.value) {
      errCopass.innerHTML = "Passwords do not match";
      copass.classList.add("error-input");
      isValid = false;
    } 
    else {
      errCopass.innerHTMLt = "";
      copass.classList.remove("error-input");
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
    return isValid
  }

  //isNaN = is not a number it is a method of string